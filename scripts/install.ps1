param(
    [Parameter(Mandatory = $true)]
    [string] $Target,

    [ValidateSet('codex', 'claude', 'cursor', 'antigravity', 'all')]
    [string] $Tool = 'all',

    [switch] $Force
)

$ErrorActionPreference = 'Stop'
$sourceRoot = Split-Path -Parent $PSScriptRoot
$targetRoot = (Resolve-Path -LiteralPath $Target).Path

function Copy-Safely([string] $Source, [string] $Destination) {
    if ((Test-Path -LiteralPath $Destination) -and -not $Force) {
        Write-Host "Skipped existing path: $Destination"
        return
    }

    $parent = Split-Path -Parent $Destination
    New-Item -ItemType Directory -Force -Path $parent | Out-Null
    Copy-Item -LiteralPath $Source -Destination $Destination -Recurse -Force:$Force
    Write-Host "Installed: $Destination"
}

function Install-Bundle([string] $ToolRoot) {
    Copy-Safely (Join-Path $sourceRoot 'agents') (Join-Path $targetRoot "$ToolRoot\agents")
    Copy-Safely (Join-Path $sourceRoot 'skills') (Join-Path $targetRoot "$ToolRoot\skills")
    Copy-Safely (Join-Path $sourceRoot '.agents\rules') (Join-Path $targetRoot "$ToolRoot\rules")
}

Copy-Safely (Join-Path $sourceRoot 'AGENTS.md') (Join-Path $targetRoot 'AGENTS.md')
Copy-Safely (Join-Path $sourceRoot '.verdicspec') (Join-Path $targetRoot '.verdicspec')
Copy-Safely (Join-Path $sourceRoot 'agents') (Join-Path $targetRoot 'agents')
Copy-Safely (Join-Path $sourceRoot 'skills') (Join-Path $targetRoot 'skills')
Copy-Safely (Join-Path $sourceRoot 'technology-packs') (Join-Path $targetRoot 'technology-packs')
Copy-Safely (Join-Path $sourceRoot 'templates') (Join-Path $targetRoot 'templates')
Copy-Safely (Join-Path $sourceRoot 'commands') (Join-Path $targetRoot 'commands')
Copy-Safely (Join-Path $sourceRoot 'docs') (Join-Path $targetRoot 'docs')

if ($Tool -in @('claude', 'all')) {
    Copy-Safely (Join-Path $sourceRoot 'CLAUDE.md') (Join-Path $targetRoot 'CLAUDE.md')
    Install-Bundle '.claude'
}

if ($Tool -in @('cursor', 'all')) {
    Copy-Safely (Join-Path $sourceRoot '.cursor') (Join-Path $targetRoot '.cursor')
}

if ($Tool -in @('codex', 'antigravity', 'all')) {
    Install-Bundle '.agents'
}

Write-Host 'Verdicspec installation completed.'
