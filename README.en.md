# AnvilCraft website and developer documentation

[简体中文](README.md) · English

The website, project information and four developer handbooks are available in English and Simplified Chinese. Use **Developer Docs** to select an AnvilCraft version or **Ageratum** to select an Ageratum version. Inside a handbook, the sidebar and search cover that version.

| Mod | Minecraft 1.21.1 | Minecraft 26.1.2 |
| --- | --- | --- |
| AnvilCraft | [21.1 handbook](docs/en/anvilcraft/21.1/index.md) | [26.1 handbook](docs/en/anvilcraft/26.1/index.md) |
| Ageratum | [21.1 handbook](docs/en/ageratum/21.1/index.md) | [26.1 handbook](docs/en/ageratum/26.1/index.md) |

The branch checklist lists upstream branches, source commits and topics. In each handbook, open **Data & Resource Packs** to look up recipe and resource fields. The feature guides link to Java declarations and call sites at the documented revision. [Branch checklist](CHECKLIST.en.md)

## Run the site locally

Install Node.js 24 and pnpm, then run these commands from the repository root.

```shell
pnpm install --frozen-lockfile
pnpm docs:dev
```

Open the local URL printed in the terminal. To check the documentation, build it and preview the result, run the commands below. The build writes static files to `docs/.vitepress/dist/`.

```shell
pnpm typecheck
pnpm docs:check
pnpm docs:build
pnpm docs:check-render
pnpm docs:preview
```

## Publish the site

For pull requests targeting `main`, GitHub Actions checks types, validates the handbooks, builds the site and checks the internal links in the generated pages. After a merge to `main`, the workflow creates two archives from the same build. [Deployment workflow](.github/workflows/page.yml)

- The `pages` artifact is available for seven days for use with 1Panel. Unpack it to find `artifact.tar`, with the site index at the archive root. The workflow publishes the site to `gh-pages`, then uses the `ONEPANEL_URL` and `ONEPANEL_TOKEN` repository secrets to trigger the 1Panel job named `更新www.anvilcraft.dev`.
- GitHub Pages uses the `github-pages` artifact to publish the site at `anvil-dev.github.io`.

To redeploy the same commit, select `main` in the **Deploy VitePress site to Pages** workflow and run it manually.

## Community pages and accounts

Open **Basic Info** for the mod introduction, overview, credits and support page. **Special Thanks** links to the contributor wall and application. The account menu in the upper right opens GitHub sign-in and the user profile.

The frontend uses `https://api.anvilcraft.dev` by default. For a self-hosted backend, set `ANVIL_API_BASE` to its origin (for example, `http://localhost:8080`) before starting the dev server or building the site. You can also set `window.__ANVIL_API_BASE__` before the frontend scripts run. Accounts, contributors and live updates share this endpoint.

When deploying to a new domain, add the site's origin to the backend's CORS configuration and configure GitHub OAuth to return to `/oauth-callback` on that site. The backend manages the GitHub client secret. Deployments using device codes follow the GitHub device authorization flow.

The homepage copy, images, icons, project information and community pages come from the Anvil-Dev website. The upstream footer credits Copyright © 2024-present Gugle. Site content uses CC BY-NC-SA 4.0. The adapted frontend code retains the upstream AGPL license, with changes for the documentation navigation, bilingual routes and account interactions. [Upstream revision](https://github.com/Anvil-Dev/Anvil-Dev.github.io/tree/26c370f6ca809bafa66781e07dcde509a97f05de) · [Content license](https://creativecommons.org/licenses/by-nc-sa/4.0/) · [Upstream code license](licenses/Anvil-Dev.github.io-AGPL-3.0.txt)

## Verify a handbook against its source

Check out the corresponding upstream branch and run `git pull --ff-only`. The handbook's opening page links to the commit used for its examples. To verify a published handbook, check out that exact commit. For a handbook update, first update the revision on its opening page and in the checklist, then review the source and examples by topic.

The following PowerShell commands assume an adjacent upstream checkout and a `JAVA_HOME` pointing to the JDK for that branch.

```powershell
node scripts/check-source-links.ts ../AnvilCraft docs/anvilcraft/21.1
node scripts/recipe-builders.ts --check --source ../AnvilCraft --handbook docs/anvilcraft/21.1 --java "$env:JAVA_HOME/bin/java.exe"
node scripts/verify-examples.ts ../AnvilCraft docs/anvilcraft/21.1 --standalone
```

The standalone example check reads the Gradle configuration, mod metadata and complete Java classes in `dev.example` from the handbook. It runs `classes` in a temporary directory using the upstream Gradle Wrapper and public Maven dependencies. On Linux or macOS, pass the local path to the Java executable. The first run downloads the Minecraft development artifacts and Maven dependencies. Examples quoted from upstream retain their package names and link to the pinned source revision.

## Documentation layout

Chinese handbooks live in `docs/<mod>/<version>/` and English handbooks in `docs/en/<mod>/<version>/`. Keep the same relative path in both languages so readers can switch languages on any page. Each topic has a directory with an `index.md`. The sidebar uses the first heading of each child page. Vue components live in `docs/.vitepress/theme/`. The site and navigation use TypeScript, the styles use SCSS, and source files use UTF-8.

After adding, moving or renaming a page, run `node scripts/checklist.ts` to regenerate the per-handbook checklists. Each checklist links to all pages grouped by topic. Run `pnpm docs:check` to check the titles, links and page counts against the source files.
