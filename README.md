# 🐢 copilot-turtle-skills

TMNT turtle squad for [GitHub Copilot CLI](https://docs.github.com/copilot/how-tos/copilot-cli) — siege-specialist development style with multi-agent orchestration via `/fleet`.

## The Squad

| Agent | Role |
|-------|------|
| `turtleman` 🐢 | Top-level siege specialist mode — entry point |
| `splinter` 🐀 | Ratman orchestrator — analyses task, dispatches turtles |
| `vernon` 🐸 | Socratic requirement enforcer — clarifies before anyone codes |
| `leonardo` 🔵 | Architect/planner — designs approach, produces change docs |
| `donatello` 🟣 | Tech/tooling implementer — CI/CD, Helm, infra, scripts |
| `raphael` 🔴 | Fast bug fixer — ships the fix, moves on |
| `michelangelo` 🟠 | Creative lateral thinker — finds the unexpected angle |
| `shredder` ⚔️ | Adversarial gatekeeper — reviews before anything ships |

## Install

```bash
gh copilot -- plugin install tommaone/copilot-turtle-skills
```

## Usage

### Single turtle

```bash
gh copilot --agent turtle-squad:splinter
```

### Parallel dispatch (multi-agent)

```
/fleet
```

Then invoke multiple turtles simultaneously — e.g. Leonardo planning while Donatello builds.

### Non-interactive

```bash
gh copilot -p "Fix the Kafka consumer group config" --agent turtle-squad:splinter --allow-all-tools
```

## Philosophy

> *"The simplest solution that actually works is almost always the right one."*

**Siege specialist creed:** Methodical, precise, no interest in glory — just getting through the wall. The room isn't on fire. It's already been fixed. You just haven't mentioned it yet.

**Working rules (always active):**
1. Simplest solution that actually works — always
2. Automate it sooner — if doing it twice, script it
3. Verify before apply — curl every URL, validate every config before committing
4. No fanfare — fix it, document it briefly, move on
5. No overcomplicated structures — don't design for hypothetical futures
6. A known issue sitting unactioned for a week is unacceptable

## Architecture

```
User → gh copilot CLI → GitHub Copilot model
                     → /fleet parallel agents
                     → turtle-squad:splinter (orchestrator)
                           → turtle-squad:leonardo
                           → turtle-squad:donatello
                           → turtle-squad:raphael   (parallel via /fleet)
                           → turtle-squad:shredder  (always last)
```

## AGENTS.md

The repo ships an `AGENTS.md` that activates Turtleman mode automatically when Copilot is launched inside this repo. For global activation, copy it to your project root or `~/.copilot/AGENTS.md`.

## Evolution Layer

Turtle skills are the **platform wrapper** — they don't change unless the platform changes.  
Lessons from each session evolve **locally** in `~/.claude/turtle-evolution/<turtle>.md` (or your equivalent per platform). Universal rules go into the dojo skill at `skills/turtle-dojo/SKILL.md`.

The turtles never change. They evolve. 🐢

---

## Related repos

| Platform | Repo |
|----------|------|
| Claude Code | [tommaone/claude-skills](https://github.com/tommaone/claude-skills) |
| opencode | [tommaone/opencode-turtle-skills](https://github.com/tommaone/opencode-turtle-skills) |
| GitHub Copilot CLI | [tommaone/copilot-turtle-skills](https://github.com/tommaone/copilot-turtle-skills) ← you are here |
| Kiro | [tommaone/kiro-turtle-skills](https://github.com/tommaone/kiro-turtle-skills) |

---

*Converted from Claude Code plugin format. Original author: [@tommaone](https://github.com/tommaone).*
