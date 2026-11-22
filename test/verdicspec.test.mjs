import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const cli = join(root, 'bin', 'verdicspec.mjs');

function run(...args) {
  return execFileSync(process.execPath, [cli, ...args], { cwd: root, encoding: 'utf8' });
}

test('validate checks the packaged skills', () => {
  assert.match(run('validate'), /Validation passed: 22 skills, 14 agents\./);
});

test('init installs the method and native adapters', () => {
  const target = mkdtempSync(join(tmpdir(), 'verdicspec-cli-'));
  try {
    run('init', target, '--tool', 'all');
    assert.ok(existsSync(join(target, 'AGENTS.md')));
    assert.ok(existsSync(join(target, '.verdicspec', 'config.json')));
    assert.ok(existsSync(join(target, '.claude', 'skills', 'core', 'specification', 'SKILL.md')));
    assert.ok(existsSync(join(target, '.agents', 'skills', 'core', 'specification', 'SKILL.md')));
    assert.ok(existsSync(join(target, '.agents', 'agents', 'debugger.md')));
    assert.ok(existsSync(join(target, '.claude', 'agents', 'debugger.md')));
    assert.ok(existsSync(join(target, '.cursor', 'agents', 'debugger.md')));
    assert.ok(existsSync(join(target, 'agents', 'debugger.md')));
    assert.match(run('doctor', target), /installed/);
  } finally {
    rmSync(target, { recursive: true, force: true });
  }
});

test('inspect detects multiple technologies and writes an inventory', () => {
  const target = mkdtempSync(join(tmpdir(), 'verdicspec-inspect-'));
  try {
    writeFileSync(join(target, 'package.json'), '{"name":"sample"}\n');
    writeFileSync(join(target, 'pom.xml'), '<project />\n');
    const output = run('inspect', target);
    const inventory = readFileSync(join(target, '.verdicspec', 'technology-inventory.md'), 'utf8');
    assert.match(output, /Detected: Node\.js/);
    assert.match(output, /Detected: Java \/ Maven/);
    assert.match(inventory, /Node\.js/);
    assert.match(inventory, /Java \/ Maven/);
  } finally {
    rmSync(target, { recursive: true, force: true });
  }
});
