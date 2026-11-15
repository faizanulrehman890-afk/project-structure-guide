# Contributing Guide

<!--
  WHY THIS FILE EXISTS:
  CONTRIBUTING.md tells people HOW to help with your project. GitHub links to it
  automatically when someone opens a new issue or pull request, so contributors
  see your rules before they start. That saves time for everyone.
-->

Thanks for wanting to contribute! 🎉 Every contribution helps, whether it's fixing a typo, reporting a bug or adding a feature. This guide walks you through it step by step, even if it's your first time.

---

## 📋 Table of Contents

1. [Ways to Contribute](#-ways-to-contribute)
2. [Reporting a Bug](#-reporting-a-bug)
3. [Your First Code Contribution](#-your-first-code-contribution)
4. [Commit Message Style](#-commit-message-style)
5. [Pull Request Checklist](#-pull-request-checklist)
6. [Code of Conduct](#-code-of-conduct)

---

## 💡 Ways to Contribute

You don't have to write code to help:

- 🐛 **Report bugs** you find
- 📝 **Improve documentation**, such as fixing typos or clarifying confusing parts
- 💬 **Answer questions** in issues
- ✨ **Suggest features** you'd find useful
- 🔧 **Fix bugs or build features** with code

---

## 🐛 Reporting a Bug

1. **Search existing issues** first. Someone may have reported it already.
2. Click **Issues → New Issue → Bug Report**.
3. Fill in the template. It asks for steps to reproduce, what you expected and what actually happened.

The more detail you give, the faster it can be fixed!

---

## 🚀 Your First Code Contribution

### Step 1: Fork the repository
Click the **Fork** button at the top-right of the GitHub page. This creates your own copy of the project under your account.

### Step 2: Clone your fork
```bash
git clone https://github.com/faizanulrehman890-afk/project-structure-guide.git
cd project-structure-guide
```

### Step 3: Set up the project
```bash
cp .env.example .env     # create your local environment file
node src/index.js        # make sure it runs
```

### Step 4: Create a new branch
Never work directly on `main`. Create a branch with a descriptive name:
```bash
git checkout -b fix/typo-in-readme
```

Branch naming ideas:
| Prefix | Use for | Example |
|--------|---------|---------|
| `feature/` | New features | `feature/dark-mode` |
| `fix/` | Bug fixes | `fix/login-crash` |
| `docs/` | Documentation | `docs/update-readme` |

### Step 5: Make your changes
Edit the files, then test that everything still works.

### Step 6: Commit your changes
```bash
git add .
git commit -m "docs: fix typo in README"
```

### Step 7: Push to your fork
```bash
git push origin fix/typo-in-readme
```

### Step 8: Open a Pull Request (PR)
Go to your fork on GitHub and click **"Compare & pull request"**. Describe what you changed and why, then submit. 🎉

A maintainer will review it. They may ask for changes. That's normal and part of learning!

---

## ✍️ Commit Message Style

We follow a simple version of [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <short description>
```

| Type | When to use it |
|------|----------------|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation only |
| `style` | Formatting (no code meaning changes) |
| `refactor` | Code restructuring without changing behavior |
| `test` | Adding or fixing tests |
| `chore` | Maintenance (dependencies, config) |

✅ Good: `fix: handle missing PORT variable`
❌ Bad: `fixed stuff`

---

## ✅ Pull Request Checklist

Before submitting, make sure:

- [ ] My code runs without errors (`node src/index.js`)
- [ ] I followed the style rules in `.editorconfig`
- [ ] I did **not** commit my `.env` file or `node_modules/`
- [ ] I updated the README if my change affects how the project is used
- [ ] My PR description explains **what** changed and **why**

---

## 🤗 Code of Conduct

Be kind, patient and respectful. Everyone was a beginner once. Harassment or rude behavior of any kind will not be tolerated.

---

**Questions?** Open an issue and ask. There are no silly questions! 💬
