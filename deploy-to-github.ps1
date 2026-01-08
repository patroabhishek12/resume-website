# PowerShell script to deploy resume website to GitHub Pages
# Usage: .\deploy-to-github.ps1

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "   Resume Website - GitHub Pages Deployment" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is installed
try {
    $gitVersion = git --version
    Write-Host "✓ Git is installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Git is not installed!" -ForegroundColor Red
    Write-Host "  Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

Write-Host ""

# Get GitHub username and repository name
$username = Read-Host "Enter your GitHub username"
$repoName = Read-Host "Enter your repository name (e.g., my-resume or $username.github.io)"

Write-Host ""
Write-Host "Summary:" -ForegroundColor Cyan
Write-Host "  GitHub URL: https://github.com/$username/$repoName" -ForegroundColor White
Write-Host "  Website URL: https://$username.github.io/$repoName" -ForegroundColor White
Write-Host ""

$confirm = Read-Host "Is this correct? (y/n)"
if ($confirm -ne "y") {
    Write-Host "Deployment cancelled." -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "Starting deployment..." -ForegroundColor Cyan

# Initialize git if not already initialized
if (-not (Test-Path ".git")) {
    Write-Host "→ Initializing git repository..." -ForegroundColor Yellow
    git init
}

# Add all files
Write-Host "→ Adding files..." -ForegroundColor Yellow
git add .

# Commit
Write-Host "→ Creating commit..." -ForegroundColor Yellow
git commit -m "Initial commit: Resume website"

# Add remote
Write-Host "→ Adding GitHub remote..." -ForegroundColor Yellow
$remoteUrl = "https://github.com/$username/$repoName.git"
git remote remove origin 2>$null  # Remove if exists
git remote add origin $remoteUrl

# Push to main branch
Write-Host "→ Pushing to main branch..." -ForegroundColor Yellow
git branch -M main
git push -u origin main

# Create and push gh-pages branch with public folder content
Write-Host "→ Creating gh-pages branch..." -ForegroundColor Yellow
git checkout -b gh-pages

# Copy public folder contents to root for gh-pages
Write-Host "→ Preparing files for GitHub Pages..." -ForegroundColor Yellow
Copy-Item -Path "public\*" -Destination "." -Recurse -Force

# Remove server files that aren't needed for static hosting
Remove-Item "server.js" -ErrorAction SilentlyContinue
Remove-Item "package.json" -ErrorAction SilentlyContinue
Remove-Item "package-lock.json" -ErrorAction SilentlyContinue

# Commit and push gh-pages
git add .
git commit -m "Deploy to GitHub Pages"
Write-Host "→ Pushing to gh-pages branch..." -ForegroundColor Yellow
git push -u origin gh-pages

# Switch back to main branch
git checkout main

Write-Host ""
Write-Host "================================================" -ForegroundColor Green
Write-Host "   Deployment Complete! ✓" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Go to: https://github.com/$username/$repoName/settings/pages" -ForegroundColor White
Write-Host "2. Under 'Branch', select 'gh-pages' and '/ (root)'" -ForegroundColor White
Write-Host "3. Click 'Save'" -ForegroundColor White
Write-Host "4. Wait 2-5 minutes for deployment" -ForegroundColor White
Write-Host "5. Visit: https://$username.github.io/$repoName" -ForegroundColor White
Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
