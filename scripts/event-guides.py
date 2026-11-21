"""Trace the construction sites of AnvilCraft events in a single pinned checkout."""
import re
import subprocess
import argparse
from pathlib import Path
from collections import defaultdict

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("source", type=Path)
parser.add_argument("handbook", type=Path)
args = parser.parse_args()
repo = args.source.resolve()
out = args.handbook.resolve()
sha = subprocess.check_output(["git", "-C", repo, "rev-parse", "HEAD"], text=True).strip()
assert f"/tree/{sha}" in (out / "index.md").read_text("utf-8")
url = "https://github.com/Anvil-Dev/AnvilCraft/blob/" + sha + "/"
root = "src/main/java/dev/dubhe/anvilcraft/"
definitions = {}
sites = defaultdict(list)
for filename in subprocess.check_output(["git", "-C", repo, "ls-files", "src/main/java"], encoding="utf-8").splitlines():
    if not filename.endswith(".java") or filename.endswith("package-info.java"):
        continue
    code = (repo / filename).read_text("utf-8")
    if filename.startswith(root + "api/event/"):
        definitions[Path(filename).stem] = (filename, code)
    for found in re.finditer(r"\bnew\s+(\w+Event(?:\.\w+)?)\s*\(", code):
        line = code.count("\n", 0, found.start()) + 1
        sites[found[1]].append((filename, line))

folder = out / "events"
folder.mkdir(exist_ok=True)
index = ["# 事件", "", "先确定要介入的动作，再查看事件在哪段游戏逻辑中创建。打开调用点可核对发布总线、所在一侧，以及发布者是否检查取消或结果标志。", ""]
for name, (path, source) in sorted(definitions.items()):
    children = re.findall(r"\bpublic\s+(?:static\s+)?(?:abstract\s+)?(?:final\s+)?class\s+(\w+)", source)
    linked = [name] + [name + "." + n for n in children if n != name]
    text = ["# " + name, ""]
    text.extend(["该组事件定义在 [`" + Path(path).name + "`](" + url + path + ")。查询事件实例里能读写的状态时，使用下表中的声明；跟踪游戏时序时，从创建位置向下看发布者如何消费结果。", "", "| 事件类型 | 创建位置 |", "| --- | --- |"])
    for kind in dict.fromkeys(linked):
        positions = sites.get(kind, [])
        if not positions:
            positions = [(p, n) for p, n in sites.get(kind.split(".")[-1], []) if p == path]
        refs = "、".join(f"[`{Path(p).stem}:{n}`]({url}{p}#L{n})" for p, n in positions)
        if not refs:
            refs = "此提交中未检出以该名称直接构造的调用点"
        text.append(f"| `{kind}` | {refs} |")
    for ref in sorted((out / "api").glob("dev-dubhe-anvilcraft-api-event*.md")):
        for typ in re.findall(r"^## (\S+)\s*$", ref.read_text("utf-8"), re.M):
            if typ == name or typ.startswith(name + "."):
                if "## 参数与事件状态" not in text:
                    text += ["", "## 参数与事件状态", ""]
                text.append(f"- [`{typ}`](../api/{ref.stem}#{typ.lower().replace('.', '-')})")
    dest = re.sub(r"(?<!^)(?=[A-Z])", "-", name).lower()
    (folder / (dest + ".md")).write_text("\n".join(text) + "\n", "utf-8")
    index.append(f"- [{name}](./{dest})")
(folder / "index.md").write_text("\n".join(index) + "\n", "utf-8")
print(f"{len(definitions)} event families indexed")
