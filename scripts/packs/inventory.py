"""List codec declarations and bundled resources from one checked-out mod branch.

Run with Python 3.10+: python scripts/packs/inventory.py PATH_TO_REPO --output inventory.json
The inventory preserves Java expressions so reviewers can follow custom codecs and defaults.
"""

import argparse
from bisect import bisect_right
from collections import defaultdict
from dataclasses import dataclass
import json
from pathlib import Path
import re
import subprocess


TOKEN = re.compile(
    r'//[^\n]*|/\*[\s\S]*?\*/|"(?:\\.|[^"\\])*"|'
    r"'(?:\\.|[^'\\])*'|[\w$]+|->|::|[^\s]"
)
FIELD_METHODS = {"fieldOf", "optionalFieldOf", "lenientOptionalFieldOf"}


@dataclass(frozen=True)
class Token:
    text: str
    start: int
    end: int


def decode_java(path: str, source: str):
    tokens = [
        Token(m[0], *m.span())
        for m in TOKEN.finditer(source)
        if not m[0].startswith(("//", "/*"))
    ]
    newlines = [m.start() for m in re.finditer("\n", source)]
    pairs = {}
    opened = []
    for i, token in enumerate(tokens):
        if token.text in ("(", "[", "{"):
            opened.append(i)
        elif token.text in (")", "]", "}") and opened:
            opening = opened.pop()
            pairs[i] = opening
            pairs[opening] = i

    def expression(first, last):
        return re.sub(r"\s*\n\s*", " ", source[tokens[first].start : tokens[last].end]).strip()

    def receiver(dot):
        cursor = dot - 1
        while cursor >= 0:
            tok = tokens[cursor].text
            if tok in (")", "]") and cursor in pairs:
                cursor = pairs[cursor] - 1
            elif re.fullmatch(r"[\w$.]+", tok) and tok not in ("return", "yield"):
                cursor -= 1
            else:
                break
        return expression(cursor + 1, dot - 1) if cursor + 1 < dot else ""

    fields = []
    for i in range(2, len(tokens) - 2):
        method = tokens[i].text
        if method not in FIELD_METHODS or tokens[i - 1].text != ".":
            continue
        if tokens[i + 1].text != "(" or i + 1 not in pairs:
            continue
        end = pairs[i + 1]
        first = i + 2
        if first >= end:
            continue
        cursor = first
        while cursor < end and tokens[cursor].text != ",":
            cursor = pairs[cursor] + 1 if tokens[cursor].text in ("(", "[", "{") else cursor + 1
        field = expression(first, cursor - 1)
        default = expression(cursor + 1, end - 1) if cursor < end - 1 else None
        fields.append(
            {
                "path": path,
                "line": bisect_right(newlines, tokens[i].start) + 1,
                "name": field.strip('"') if field.startswith('"') and field.endswith('"') else field,
                "method": method,
                "codec": receiver(i - 1),
                "default": default,
            }
        )
    return fields


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("repo", type=Path)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    root = args.repo.resolve()
    files = subprocess.check_output(["git", "-C", str(root), "ls-files", "-z", "src"]).decode().split("\0")
    revision = subprocess.check_output(["git", "-C", str(root), "rev-parse", "HEAD"], text=True).strip()
    fields = []
    resources = defaultdict(list)
    for name in files:
        if name.endswith(".java"):
            source = (root / name).read_text(encoding="utf-8-sig")
            if any(method in source for method in FIELD_METHODS):
                fields.extend(decode_java(name, source))
        elif match := re.match(r"src/[^/]+/resources/(data|assets)/([^/]+)/(.+)", name):
            kind, namespace, tail = match.groups()
            directory = tail.partition("/")[0]
            resources[f"{kind}/{namespace}/{directory}"].append(name)
    result = {"revision": revision, "fields": fields, "resources": dict(sorted(resources.items()))}
    args.output.write_text(json.dumps(result, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
