param(
    [switch] $TestInstaller
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

$failures = [System.Collections.Generic.List[string]]::new()

function Assert-Path([string] $Path) {
    if (-not (Test-Path -LiteralPath $Path)) {
        $failures.Add("Missing path: $Path")
    }
}

@(
    'README.md',
    'AGENTS.md',
    'CLAUDE.md',
    '.cursor/rules/verdicspec.mdc',
    '.cursor/rules/agent-skill-routing.mdc',
    '.cursor/agents/debugger.md',
    '.claude/agents/debugger.md',
    '.agents/agents/debugger.md',
    'agents/debugger.md',
    'scripts/install.ps1',
    '.verdicspec/config.json',
    '.verdicspec/README.md',
    'docs/artifact-contract.md',
    'templates/threat-model.md',
    'templates/feature-spec.md',
    'templates/technology-inventory.md',
    'technology-packs/node/README.md',
    'technology-packs/dotnet/README.md',
    'technology-packs/python/README.md',
    'technology-packs/java/README.md',
    'skills/practices/observability/references/java.md'
) | ForEach-Object { Assert-Path $_ }

$skills = @(Get-ChildItem skills -Recurse -Filter SKILL.md)
$skillNames = @()
foreach ($skill in $skills) {
    $content = Get-Content -LiteralPath $skill.FullName -Raw
    if ($content -notmatch '(?s)^---\s*\r?\nname: [^\r\n]+\r?\ndescription: [^\r\n]+\r?\n---') {
        $failures.Add("Invalid skill frontmatter: $($skill.FullName)")
    }

    if ($content -match '(?m)^name:\s*(.+)$') {
        $skillNames += $Matches[1].Trim()
    }
}

$duplicates = @($skillNames | Group-Object | Where-Object Count -gt 1)
foreach ($duplicate in $duplicates) {
    $failures.Add("Duplicate skill name: $($duplicate.Name)")
}

$tokens = $null
$parseErrors = $null
[System.Management.Automation.Language.Parser]::ParseFile((Join-Path $root 'scripts/install.ps1'), [ref]$tokens, [ref]$parseErrors) | Out-Null
if ($parseErrors.Count -gt 0) {
    $failures.Add("Installer has $($parseErrors.Count) PowerShell parse error(s)")
}

if ($TestInstaller) {
    $validationTarget = Join-Path ([System.IO.Path]::GetTempPath()) "verdicspec-validation-$PID"
    try {
        New-Item -ItemType Directory -Force -Path $validationTarget | Out-Null
        & (Join-Path $root 'scripts/install.ps1') -Target $validationTarget -Tool all

        @(
            'AGENTS.md',
            '.verdicspec/config.json',
            'CLAUDE.md',
            '.cursor/rules/verdicspec.mdc',
            '.claude/skills/core/specification/SKILL.md',
            '.agents/skills/core/specification/SKILL.md',
            '.claude/agents/debugger.md',
            '.agents/agents/debugger.md',
            '.cursor/agents/debugger.md',
            'agents/debugger.md',
            'technology-packs/java/README.md',
            'templates/threat-model.md',
            'commands/discover.md'
        ) | ForEach-Object {
            if (-not (Test-Path -LiteralPath (Join-Path $validationTarget $_))) {
                $failures.Add("Installer did not create: $_")
            }
        }
    }
    finally {
        if (Test-Path -LiteralPath $validationTarget) {
            Remove-Item -LiteralPath $validationTarget -Recurse -Force
        }
    }
}

if ($failures.Count -gt 0) {
    $failures | ForEach-Object { Write-Error $_ }
    exit 1
}

Write-Output "Validation passed: $($skills.Count) skills, $($skillNames.Count) unique skill names."
if ($TestInstaller) {
    Write-Output 'Installer integration test passed.'
}
