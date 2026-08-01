# Oradia terminal tour — run inside VS Code's integrated terminal:  ./terminal-tour.ps1
# Demonstrates: command decorations (green/red gutter dots), the ANSI palette, and a
# colored git diff. Nothing here touches your repo — the diff uses a scratch folder.

$ESC = [char]27
function Color($code, $text) { "$ESC[${code}m$text$ESC[0m" }

Write-Host ""
Write-Host (Color 1 "== Oradia terminal tour ==")
Write-Host "Watch the gutter to the LEFT of each command for a colored dot."
Write-Host ""

# 1) A command that SUCCEEDS -> expect a GREEN dot
Write-Host (Color 32 "[1] success (expect green dot):")
Get-ChildItem -Name | Select-Object -First 4

# 2) A command that FAILS -> expect a RED dot (non-zero exit)
Write-Host (Color 31 "[2] failure (expect red dot):")
Get-Content ".\this-file-does-not-exist.txt" -ErrorAction SilentlyContinue
cmd /c "exit 1" | Out-Null

# 3) ANSI palette — these map to the theme's terminal colors
Write-Host ""
Write-Host (Color 1 "[3] ANSI palette:")
$names = @{30='black';31='red';32='green';33='yellow';34='blue';35='magenta';36='cyan';37='white'}
foreach ($k in ($names.Keys | Sort-Object)) {
  Write-Host ("  " + (Color $k ("normal " + $names[$k]).PadRight(16)) + (Color ($k+60) ("bright " + $names[$k])))
}

# 4) A colored git diff in a scratch repo -> additions green, removals red
Write-Host ""
Write-Host (Color 1 "[4] git diff (green + / red -):")
$tmp = Join-Path $env:TEMP "oradia-diff-demo"
Remove-Item $tmp -Recurse -Force -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Path $tmp | Out-Null
Push-Location $tmp
try {
  git init -q 2>$null
  "line one`nline two`nline three" | Set-Content file.txt
  git add . 2>$null
  git -c user.email="demo@oradia" -c user.name="demo" commit -qm "base" 2>$null
  "line one`nline TWO (changed)`nline three`nline four (added)" | Set-Content file.txt
  git -c color.ui=always --no-pager diff
} finally {
  Pop-Location
  Remove-Item $tmp -Recurse -Force -ErrorAction SilentlyContinue
}

Write-Host ""
Write-Host (Color 32 "Done.") "Try scrolling - the decorations also appear on the scrollbar."
