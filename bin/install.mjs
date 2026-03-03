#!/usr/bin/env node

import { execSync } from 'child_process';
import { mkdirSync, copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { homedir } from 'os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const skillSrc = join(__dirname, '..', 'skills', 'defuddle', 'SKILL.md');
const skillDir = join(homedir(), '.claude', 'skills', 'defuddle');
const skillDst = join(skillDir, 'SKILL.md');

console.log('Installing defuddle skill for Claude Code...\n');

// 1. Install defuddle CLI
try {
  execSync('command -v defuddle', { stdio: 'ignore' });
  const ver = execSync('defuddle --version', { encoding: 'utf8' }).trim();
  console.log(`defuddle already installed (v${ver})`);
} catch {
  console.log('Installing defuddle + jsdom globally...');
  execSync('npm install -g defuddle jsdom', { stdio: 'inherit' });
}

// 2. Copy skill
mkdirSync(skillDir, { recursive: true });
copyFileSync(skillSrc, skillDst);

console.log(`\nSkill installed to: ${skillDir}`);
console.log('Restart Claude Code to activate.');
