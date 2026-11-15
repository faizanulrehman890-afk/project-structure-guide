# 📁 Project Structure Guide

> A beginner-friendly demo repository that shows the **standard files and hidden dot-folders** you'll find in a modern, professional GitHub project.

This repo has almost no real code on purpose. It's a **map** of the files around the code: the ones that configure tools, guide contributors, automate testing and keep a team consistent.

Open each file to read the comments inside. Every one explains **why the file exists**.

---

## 🗺️ Repository Map

```
project-structure-guide/
├── .claude/
│   └── CLAUDE.md                 # Instructions for the Claude Code AI agent
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   └── bug_report.md         # Template people fill in when reporting a bug
│   └── workflows/
│       └── ci.yml                # GitHub Actions: runs checks on every push/PR
├── .vscode/
│   └── settings.json             # Shared VS Code settings for this project
├── src/
│   └── index.js                  # The (tiny) source code of the project
├── .editorconfig                 # Basic code-style rules for any editor
├── .env.example                  # Template showing which env variables are needed
├── .gitattributes                # Keeps line endings consistent across Windows/Mac/Linux
├── .gitignore                    # Files Git should never track
├── CONTRIBUTING.md               # How to contribute to this project
├── LICENSE                       # Legal terms for using this code (MIT)
├── package.json                  # Project info, scripts and dependencies (Node.js)
└── README.md                     # You are here! The front page of the repo
```

> 💡 **What's a "dot-file"?** A file or folder whose name starts with a `.` (like `.gitignore` or `.github/`) is **hidden** by default on macOS and Linux. They usually hold configuration rather than code.
> - **Windows Explorer:** View → Show → Hidden items
> - **macOS Finder:** `Cmd + Shift + .`
> - **Terminal:** `ls -la`

---

## 📄 What Each File Does

### Root files

| File | Purpose | Required? |
|------|---------|-----------|
| `README.md` | The **front page** of your repo. GitHub shows it automatically on the repo homepage. It explains what the project is, how to install it and how to use it. | ✅ Always |
| `LICENSE` | Tells others what they're **legally allowed** to do with your code. Without a license, nobody can legally reuse it, even if it's public. | ✅ For public/open-source projects |
| `.gitignore` | Lists files Git should **never track**, such as `node_modules/`, secret `.env` files and OS junk like `.DS_Store`. | ✅ Always |
| `.gitattributes` | Tells Git how to treat files. Here it forces **LF line endings** so Windows and Mac/Linux users don't see fake "changes". | ⭐ Recommended for mixed-OS teams |
| `.env.example` | A **template** of the environment variables the app needs, with fake values. The real `.env` (with real secrets) is git-ignored. | ✅ If your app uses env variables |
| `CONTRIBUTING.md` | A guide for people who want to **help** with your project: how to set up, branch, commit and open a pull request. | ⭐ Recommended |
| `.editorconfig` | Keeps basic formatting (indentation, line endings) **consistent across all editors**: VS Code, WebStorm, Vim, etc. | ⭐ Recommended |
| `package.json` | The **ID card** of a Node.js project: its name, version, shortcut commands (scripts) and the packages it depends on. See the section below. | ✅ For Node.js projects |

### 📦 Understanding `package.json`

`package.json` is a plain JSON file, and **JSON does not allow comments**, so it's explained here instead. Here's what each field in this repo's `package.json` means:

| Field | What it does |
|-------|--------------|
| `name` | The project's name. Must be lowercase with no spaces (use dashes). |
| `version` | The current version, using [Semantic Versioning](https://semver.org/): `MAJOR.MINOR.PATCH` (e.g. `1.0.0`). |
| `description` | A one-sentence summary of the project. |
| `main` | The entry-point file, which is the code that runs first. |
| `scripts` | **Shortcut commands.** `npm start` runs whatever is listed under `"start"`, so nobody has to remember long commands. |
| `keywords` | Search tags, used if you publish the package to npm. |
| `author` | Who made the project. |
| `license` | The license type. It should match the `LICENSE` file. |
| `engines` | Which Node.js versions the project supports. |

The scripts in this project:

| Command | What it runs | Use it for |
|---------|--------------|------------|
| `npm start` | `node src/index.js` | Running the app |
| `npm run dev` | `node --env-file=.env src/index.js` | Running with your `.env` values loaded (Node 20.6+) |
| `npm test` | `node src/index.js` | A placeholder "test". Real projects use a test tool like Jest or Vitest. |

> 💡 **Where are the dependencies?** This demo doesn't need any. When you run `npm install <package>`, npm adds a `"dependencies"` section here automatically, downloads the code into `node_modules/` (which is git-ignored) and records exact versions in `package-lock.json` (which you **should** commit).

### Hidden folders

| Folder / File | Purpose |
|---------------|---------|
| `.github/` | A special folder GitHub reads for **repo automation and community files**. |
| `.github/workflows/ci.yml` | A **GitHub Actions** workflow. GitHub runs it automatically (e.g. on every push) to install, lint and test your code. "CI" stands for **Continuous Integration**. |
| `.github/ISSUE_TEMPLATE/bug_report.md` | A **pre-filled form** shown when someone clicks "New Issue", so bug reports always include the details you need. |
| `.vscode/settings.json` | **Workspace settings** for VS Code that apply only to this project, such as format-on-save. Shared so the whole team has the same setup. |
| `.claude/CLAUDE.md` | Instructions for **Claude Code**, an AI coding agent. It tells the AI how this project works, which commands to run and which rules to follow. |

### Source code

| Folder / File | Purpose |
|---------------|---------|
| `src/` | Short for "source". This is where your **actual application code** lives. |
| `src/index.js` | The **entry point**: the first file that runs when the app starts. |

---

## 🚀 Getting Started

You'll need [Node.js](https://nodejs.org/) (version 18 or newer).

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/project-structure-guide.git
cd project-structure-guide

# 2. Create your own .env file from the template
cp .env.example .env        # macOS / Linux / Git Bash
copy .env.example .env      # Windows Command Prompt

# 3. Run the app
npm start                   # or: node src/index.js
```

Expected output:

```
👋 Hello from project-structure-guide!
(Running in development mode)
```

---

## 🧠 Key Lessons for Beginners

1. **Never commit secrets.** Put them in `.env` (ignored) and share only `.env.example`.
2. **Never commit `node_modules/`.** Anyone can recreate it with `npm install`.
3. **Automate your checks.** CI catches mistakes before they reach the main branch.
4. **Document everything.** A good README and CONTRIBUTING guide save hours of questions.
5. **Choose a license.** No license means "all rights reserved" by default.

---

## 🤝 Contributing

Want to improve this guide? Read [CONTRIBUTING.md](CONTRIBUTING.md) first.

## 📜 License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.
