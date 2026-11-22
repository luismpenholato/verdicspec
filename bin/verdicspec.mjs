#!/usr/bin/env node

import { existsSync, cpSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const packageRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const commonEntries = [
  'AGENTS.md',
  '.verdicspec',
  'agents',
  'commands',
  'docs',
  'skills',
  'technology-packs',
  'templates'
];

const adapters = {
  codex: ['AGENTS.md', '.agents-bundle'],
  antigravity: ['AGENTS.md', '.agents-bundle'],
  claude: ['CLAUDE.md', '.claude-bundle'],
  cursor: ['.cursor'],
  copilot: ['.github/copilot-instructions.md', '.agents-bundle'],
  gemini: ['GEMINI.md'],
  cline: ['.clinerules']
};

function usage() {
  console.log(`Verdicspec CLI

Usage:
  verdicspec init [directory] [--tool all|codex|claude|cursor|antigravity|copilot|gemini|cline] [--force]
  verdicspec validate
  verdicspec list
  verdicspec doctor [directory]
  verdicspec inspect [directory]
  verdicspec help

Examples:
  verdicspec init .
  verdicspec init C:\\projects\\my-app --tool all
  verdicspec init . --tool cursor --force
`);
}

function parseOptions(args) {
  const options = { force: false, tool: 'all', positional: [] };
  for (let index = 0; index < args.length; index += 1) {
    const value = args[index];
    if (value === '--force') options.force = true;
    else if (value === '--tool') options.tool = args[++index] ?? '';
    else if (value === '--help' || value === '-h') options.help = true;
    else options.positional.push(value);
  }
  return options;
}

function copyEntry(sourceRelative, targetRoot, force, destinationRelative = sourceRelative) {
  const source = join(packageRoot, sourceRelative);
  const destination = join(targetRoot, destinationRelative);
  if (!existsSync(source)) throw new Error(`Package entry not found: ${sourceRelative}`);
  if (existsSync(destination) && !force) {
    console.log(`Skipped existing path: ${destination}`);
    return;
  }
  mkdirSync(dirname(destination), { recursive: true });
  cpSync(source, destination, { recursive: true, force });
  console.log(`Installed: ${destination}`);
}

function installAgentsBundle(targetRoot, toolRoot, force) {
  copyEntry('agents', targetRoot, force, join(toolRoot, 'agents'));
  copyEntry('skills', targetRoot, force, join(toolRoot, 'skills'));
  const rulesSource = join(packageRoot, '.agents', 'rules');
  if (existsSync(rulesSource)) {
    copyEntry(join('.agents', 'rules'), targetRoot, force, join(toolRoot, 'rules'));
  }
}

function copyAdapter(adapter, targetRoot, force) {
  for (const entry of adapters[adapter]) {
    if (entry === '.agents-bundle') {
      installAgentsBundle(targetRoot, '.agents', force);
    } else if (entry === '.claude-bundle') {
      installAgentsBundle(targetRoot, '.claude', force);
    } else {
      copyEntry(entry, targetRoot, force);
    }
  }
}

function init(args) {
  const options = parseOptions(args);
  if (options.help) return usage();
  const allowedTools = ['all', ...Object.keys(adapters)];
  if (!allowedTools.includes(options.tool)) throw new Error(`Invalid tool. Use: ${allowedTools.join(', ')}`);
  const targetRoot = resolve(options.positional[0] ?? '.');
  mkdirSync(targetRoot, { recursive: true });
  for (const entry of commonEntries) copyEntry(entry, targetRoot, options.force);
  const selected = options.tool === 'all' ? Object.keys(adapters) : [options.tool];
  for (const adapter of selected) copyAdapter(adapter, targetRoot, options.force);
  console.log(`Verdicspec installed in ${targetRoot}`);
}

function list() {
  const skills = [];
  for (const category of readdirSync(join(packageRoot, 'skills'))) {
    const categoryPath = join(packageRoot, 'skills', category);
    if (!existsSync(categoryPath) || !statSync(categoryPath).isDirectory()) continue;
    for (const skill of readdirSync(categoryPath)) {
      if (existsSync(join(categoryPath, skill, 'SKILL.md'))) skills.push(`${category}/${skill}`);
    }
  }
  console.log('Commands:');
  for (const command of readdirSync(join(packageRoot, 'commands')).filter((entry) => entry.endsWith('.md'))) {
    console.log(`  verdicspec ${command.replace(/\.md$/, '')}`);
  }
  console.log('\nAgents:');
  for (const agent of readdirSync(join(packageRoot, 'agents')).filter((entry) => entry.endsWith('.md')).sort()) {
    console.log(`  ${agent.replace(/\.md$/, '')}`);
  }
  console.log('\nSkills:');
  for (const skill of skills.sort()) console.log(`  ${skill}`);
}

function validate() {
  const skillsRoot = join(packageRoot, 'skills');
  const skills = [];
  for (const category of readdirSync(skillsRoot)) {
    const categoryPath = join(skillsRoot, category);
    if (!statSync(categoryPath).isDirectory()) continue;
    for (const skill of readdirSync(categoryPath)) {
      const file = join(categoryPath, skill, 'SKILL.md');
      if (!existsSync(file)) continue;
      const content = readFileSync(file, 'utf8');
      if (!/^---\s*\nname: .+\ndescription: .+\n---/s.test(content)) {
        throw new Error(`Invalid skill frontmatter: ${file}`);
      }
      skills.push(skill);
    }
  }
  if (new Set(skills).size !== skills.length) throw new Error('Duplicate skill directory name detected');
  const agentsDir = join(packageRoot, 'agents');
  const agents = readdirSync(agentsDir).filter((entry) => entry.endsWith('.md'));
  if (agents.length < 10) throw new Error(`Expected at least 10 agents, found ${agents.length}`);
  for (const required of ['AGENTS.md', 'templates/feature-spec.md', 'technology-packs/java/README.md', 'agents/debugger.md']) {
    if (!existsSync(join(packageRoot, required))) throw new Error(`Missing required entry: ${required}`);
  }
  for (const mirror of ['.cursor/agents', '.claude/agents', '.agents/agents']) {
    if (!existsSync(join(packageRoot, mirror, 'debugger.md'))) {
      throw new Error(`Missing mirrored agent: ${mirror}/debugger.md`);
    }
  }
  console.log(`Validation passed: ${skills.length} skills, ${agents.length} agents.`);
}

function doctor(args) {
  const targetRoot = resolve(args[0] ?? '.');
  const checks = ['AGENTS.md', '.verdicspec/config.json', 'skills', 'technology-packs', 'templates', 'commands', 'agents'];
  const missing = checks.filter((entry) => !existsSync(join(targetRoot, entry)));
  if (missing.length > 0) {
    console.error(`Verdicspec is not installed correctly in ${targetRoot}`);
    for (const entry of missing) console.error(`Missing: ${entry}`);
    process.exitCode = 1;
    return;
  }
  console.log(`Verdicspec is installed in ${targetRoot}`);
}

const ignoredDirectories = new Set(['.git', '.verdicspec', 'node_modules', 'target', 'build', 'dist', '.venv', 'venv', '__pycache__']);
const evidence = [
  ['package.json', 'Node.js', 'package manifest'],
  ['tsconfig.json', 'TypeScript', 'TypeScript configuration'],
  ['pom.xml', 'Java / Maven', 'Maven build descriptor'],
  ['build.gradle', 'Java or Kotlin / Gradle', 'Gradle build descriptor'],
  ['build.gradle.kts', 'Kotlin or Java / Gradle', 'Kotlin Gradle build descriptor'],
  ['gradlew', 'Java or Kotlin / Gradle', 'Gradle wrapper'],
  ['pyproject.toml', 'Python', 'Python project manifest'],
  ['requirements.txt', 'Python', 'Python dependency file'],
  ['go.mod', 'Go', 'Go module manifest'],
  ['Cargo.toml', 'Rust', 'Cargo manifest'],
  ['composer.json', 'PHP', 'Composer manifest'],
  ['Gemfile', 'Ruby', 'Ruby dependency manifest'],
  ['Package.swift', 'Swift', 'Swift package manifest']
];

function walkFiles(root, depth = 0, result = []) {
  if (depth > 3) return result;
  for (const entry of readdirSync(root, { withFileTypes: true })) {
    if (entry.isDirectory() && !ignoredDirectories.has(entry.name)) {
      walkFiles(join(root, entry.name), depth + 1, result);
    } else if (entry.isFile()) {
      result.push(join(root, entry.name));
    }
  }
  return result;
}

function inspect(args) {
  const targetRoot = resolve(args[0] ?? '.');
  if (!existsSync(targetRoot) || !statSync(targetRoot).isDirectory()) throw new Error(`Directory not found: ${targetRoot}`);
  const files = walkFiles(targetRoot);
  const findings = [];
  for (const [fileName, technology, reason] of evidence) {
    const matches = files.filter((file) => file.endsWith(`\\${fileName}`) || file.endsWith(`/${fileName}`));
    if (matches.length > 0) findings.push({ technology, reason, files: matches.map((file) => file.slice(targetRoot.length + 1)) });
  }
  const lines = [
    '# Technology Inventory',
    '',
    `- Project: ${targetRoot}`,
    '- Mode: To be classified as greenfield, brownfield, or hybrid',
    '',
    '## Detected technologies',
    '',
    '| Technology | Evidence | Confidence |',
    '|---|---|---|'
  ];
  if (findings.length === 0) lines.push('| No known technology detected | Inspect repository manually | Low |');
  for (const finding of findings) lines.push(`| ${finding.technology} | ${finding.reason}: ${finding.files.join(', ')} | Medium |`);
  lines.push('', '## Commands to confirm', '', '| Purpose | Command | Confirmed? |', '|---|---|---|', '| Install | | No |', '| Run | | No |', '| Test | | No |', '| Lint | | No |', '| Build | | No |', '', '## Unknowns', '', '- Confirm versions, active modules, and project-specific commands before implementation.');
  const artifactRoot = join(targetRoot, '.verdicspec');
  mkdirSync(artifactRoot, { recursive: true });
  const output = join(artifactRoot, 'technology-inventory.md');
  writeFileSync(output, `${lines.join('\n')}\n`, 'utf8');
  console.log(`Technology inventory written to ${output}`);
  for (const finding of findings) console.log(`Detected: ${finding.technology}`);
}

const [command = 'help', ...args] = process.argv.slice(2);
try {
  if (command === 'init') init(args);
  else if (command === 'validate') validate();
  else if (command === 'list') list();
  else if (command === 'doctor') doctor(args);
  else if (command === 'inspect') inspect(args);
  else usage();
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exitCode = 1;
}
