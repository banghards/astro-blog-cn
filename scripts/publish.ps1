param(
  [Parameter(ValueFromRemainingArguments = $true)]
  [string[]]$MessageParts
)

$ErrorActionPreference = "Stop"
$message = ($MessageParts -join " ").Trim()

if ([string]::IsNullOrWhiteSpace($message)) {
  $message = "更新博客内容 " + (Get-Date -Format "yyyy-MM-dd HH:mm")
}

Write-Host "==> Checking working tree"
$pending = git status --porcelain
if ([string]::IsNullOrWhiteSpace(($pending -join "").Trim())) {
  Write-Host "No changes to publish."
  exit 0
}

git status --short

Write-Host "==> Staging changes"
$pathsToStage = @(
  ".gitignore",
  "README.md",
  "astro.config.mjs",
  "package.json",
  "package-lock.json",
  "tsconfig.json",
  "src",
  "public",
  "scripts",
  "tools"
)

$existingPaths = $pathsToStage | Where-Object { Test-Path $_ }
if ($existingPaths.Count -eq 0) {
  throw "No publishable paths were found to stage."
}

git add -- $existingPaths

$staged = git diff --cached --name-only
if ([string]::IsNullOrWhiteSpace(($staged -join "").Trim())) {
  Write-Host "No publishable changes were staged. Generated outputs remain untracked."
  exit 0
}

Write-Host "==> Creating commit"
git commit -m $message

Write-Host "==> Pushing to remote"
git push

Write-Host "==> Deploying to Vercel"
vercel --prod --yes
