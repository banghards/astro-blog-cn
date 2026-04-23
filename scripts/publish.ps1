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
git add -A

Write-Host "==> Creating commit"
git commit -m $message

Write-Host "==> Pushing to remote"
git push

Write-Host "==> Deploying to Vercel"
vercel --prod --yes
