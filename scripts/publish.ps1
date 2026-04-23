param(
  [Parameter(ValueFromRemainingArguments = $true)]
  [string[]]$MessageParts
)

$ErrorActionPreference = "Stop"
$message = ($MessageParts -join " ").Trim()

if ([string]::IsNullOrWhiteSpace($message)) {
  Write-Host "Usage: npm run ship -- `"commit message`""
  exit 1
}

Write-Host "==> Checking working tree"
git status --short

Write-Host "==> Staging changes"
git add -A

Write-Host "==> Creating commit"
git commit -m $message

Write-Host "==> Pushing to remote"
git push

Write-Host "==> Deploying to Vercel"
vercel --prod --yes
