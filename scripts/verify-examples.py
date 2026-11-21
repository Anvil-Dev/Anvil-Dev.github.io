"""Compile the complete Java examples of one handbook in its upstream Gradle environment."""
import argparse
import os
import re
import subprocess
import tempfile
from pathlib import Path

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("upstream", type=Path)
parser.add_argument("handbook", type=Path)
parser.add_argument("--offline", action="store_true")
args = parser.parse_args()
upstream = args.upstream.resolve()
handbook = args.handbook.resolve()
revision = re.search(r"/tree/([a-f0-9]{40})", (handbook / "index.md").read_text("utf-8")).group(1)
actual = subprocess.check_output(["git", "-C", upstream, "rev-parse", "HEAD"], text=True).strip()
if revision != actual:
    parser.error(f"Handbook requires {revision}, found {actual}")
with tempfile.TemporaryDirectory() as tmp:
    root = Path(tmp)
    sources = root / "src"
    count = 0
    for page in handbook.rglob("*.md"):
        for code in re.findall(r"^```java\s*\n(.*?)^```", page.read_text("utf-8"), re.M | re.S):
            package = re.search(r"^package (dev\.example[.\w]*);", code, re.M)
            if not package:
                continue
            name = re.search(r"^public (?:final |abstract )?(?:class|record|interface|enum) (\w+)", code, re.M)
            if not name:
                raise ValueError(f"Missing primary type in {page}")
            target = sources.joinpath(*package[1].split("."), name[1] + ".java")
            target.parent.mkdir(parents=True, exist_ok=True)
            if target.exists() and target.read_text("utf-8") != code:
                raise ValueError(f"Conflicting example {target.name} in {page}")
            target.write_text(code, "utf-8")
            count += 1
    if not count:
        parser.error("No dev.example Java compilation units")
    init = root / "compile.gradle"
    init.write_text("""
gradle.projectsEvaluated {
    def p = gradle.rootProject
    p.tasks.register('compileHandbookExamples', JavaCompile) {
        dependsOn p.tasks.named('compileJava')
        source = p.fileTree(System.getenv('HANDBOOK_EXAMPLE_SOURCES'))
        classpath = p.sourceSets.main.compileClasspath + p.sourceSets.main.output
        destinationDirectory.set(p.file(System.getenv('HANDBOOK_EXAMPLE_OUTPUT')))
        javaCompiler.set(p.tasks.named('compileJava').get().javaCompiler)
        options.encoding = 'UTF-8'
        options.compilerArgs.add('-proc:none')
    }
}
""", "utf-8")
    print(f"Compiling {count} examples for {revision}", flush=True)
    wrapper = upstream / ("gradlew.bat" if os.name == "nt" else "gradlew")
    command = [str(wrapper), "--console=plain", "-I", str(init), "compileHandbookExamples"]
    if args.offline:
        command.append("--offline")
    subprocess.run(command, cwd=upstream, check=True, env={
        **os.environ, "HANDBOOK_EXAMPLE_SOURCES": str(sources), "HANDBOOK_EXAMPLE_OUTPUT": str(root / "classes")
    })
