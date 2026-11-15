# CLAUDE.md — Project Instructions for Claude Code

<!--
  WHY THIS FILE EXISTS:
  Claude Code is an AI coding agent that can read, write and run code in your
  project. Each time it starts a session it reads this file automatically to
  learn how YOUR project works.

  Think of it as an onboarding document for a new teammate, written for an AI.
  Without it, the AI has to guess your conventions. With it, the AI follows
  your rules from the very first message.

  WHERE IT CAN LIVE:
    - ./CLAUDE.md or ./.claude/CLAUDE.md  → shared with the team (committed to Git)
    - ./CLAUDE.local.md                   → personal notes (add to .gitignore)
    - ~/.claude/CLAUDE.md                 → your global rules for ALL projects

  TIPS FOR WRITING A GOOD ONE:
    - Keep it short and specific. Bullet points work best.
    - Include the exact commands to build, test and run the project.
    - Say what NOT to do. Rules prevent mistakes.
    - Update it whenever the project's conventions change.
    - Tip: run `/init` inside Claude Code to generate a starter version.
-->

## Project Overview

This is a **beginner-friendly demo repository** that shows the standard files and
dot-folders found in a professional GitHub project. The audience is **students**,
so clarity matters more than cleverness.

## Tech Stack

- **Language:** JavaScript (Node.js 18+)
- **Dependencies:** none (keep it that way unless there's a strong reason)

## Commands

```bash
npm start                # Run the app (same as: node src/index.js)
npm run dev              # Run with .env loaded (Node 20.6+)
npm test                 # Placeholder test (runs the app)
```

## Project Structure

- `src/` — application source code (entry point: `src/index.js`)
- `.github/` — GitHub Actions workflows and issue templates
- Root config files (`.gitignore`, `.editorconfig`, etc.) are teaching examples

## Coding Conventions

- Use **2 spaces** for indentation (see `.editorconfig`)
- Use `const` and `let`, never `var`
- Prefer clear, descriptive names over short ones (`userCount`, not `uc`)
- Every config file must have a comment block explaining **"Why this file exists"**
- Write comments for beginners: explain the *why*, not just the *what*

## Rules — Always

- Keep explanations simple. Assume the reader is new to programming.
- Update `README.md` when adding, removing or renaming files.
- Run `node src/index.js` after changing code to confirm it still works.

## Rules — Never

- Never commit `.env` or any real secrets, API keys or passwords.
- Never add new dependencies without asking first.
- Never delete the explanatory comments in config files.
- Never push directly to the `main` branch.

## Git Workflow

- Branch names: `feature/...`, `fix/...`, `docs/...`
- Commit messages follow Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`
