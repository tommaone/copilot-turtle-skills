#!/usr/bin/env node
// Sync turtle bodies from core/ submodule and stamp GitHub Copilot CLI frontmatter.
// Run: node build.js [--dry-run]
const fs = require('fs');
const path = require('path');

const CORE = path.join(__dirname, 'core');
const DRY = process.argv.includes('--dry-run');

const TURTLES = {
  splinter:     'Ratman orchestrator — analyses the task, picks the right turtle(s), coordinates the squad.',
  turtleman:    'Turtleman mode — calm, direct, siege-specialist precision. Entry point for the squad.',
  donatello:    'Tech and tooling specialist — automates everything, wires up pipelines, fixes infra.',
  leonardo:     'Planner and architect — designs the approach before touching code.',
  raphael:      'Fast delivery — no patience for bureaucracy. Ships the fix, documents briefly, moves on.',
  michelangelo: 'Creative lateral thinker — finds the unexpected angle, the meme solution, the elegant shortcut.',
  shredder:     "Devil's advocate — tears apart the plan, finds what breaks, challenges every assumption.",
  vernon:       'Socratic requirement enforcer — intercepts vague tasks and asks questions until requirements are solid.',
};

let ok = true;
for (const [name, desc] of Object.entries(TURTLES)) {
  const bodyPath = path.join(CORE, 'turtles', name + '.md');
  const outPath  = path.join(__dirname, 'agents', name + '.md');

  if (!fs.existsSync(bodyPath)) { console.error('MISSING core body:', bodyPath); ok = false; continue; }

  const body = fs.readFileSync(bodyPath, 'utf8').replace(/\r\n/g, '\n');
  const out = `---\nname: "${name}"\ndescription: ${JSON.stringify(desc)}\n---\n${body}`;

  if (DRY) {
    const current = fs.existsSync(outPath) ? fs.readFileSync(outPath, 'utf8').replace(/\r\n/g, '\n') : '';
    if (current !== out) { console.log('DIFF:', name); ok = false; }
    else console.log('OK  :', name);
  } else {
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, out);
    console.log('wrote:', name);
  }
}

// Sync dojo skill
const dojoSrc = path.join(CORE, 'turtle-dojo.md');
const dojoDst = path.join(__dirname, 'skills', 'turtle-dojo', 'SKILL.md');
if (fs.existsSync(dojoSrc)) {
  const body = fs.readFileSync(dojoSrc, 'utf8').replace(/\r\n/g, '\n');
  const out = '---\nname: turtle-dojo\ndescription: Shared rules and working principles for the entire turtle squad. Read this before acting as any turtle.\n---\n\n' + body;
  if (DRY) {
    const current = fs.existsSync(dojoDst) ? fs.readFileSync(dojoDst, 'utf8').replace(/\r\n/g, '\n') : '';
    if (current !== out) { console.log('DIFF: turtle-dojo'); ok = false; }
    else console.log('OK  : turtle-dojo');
  } else {
    fs.mkdirSync(path.dirname(dojoDst), { recursive: true });
    fs.writeFileSync(dojoDst, out);
    console.log('wrote: turtle-dojo');
  }
}

if (DRY) process.exit(ok ? 0 : 1);
