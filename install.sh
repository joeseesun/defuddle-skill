#!/bin/bash
# Install defuddle skill for Claude Code
set -e

SKILL_DIR="$HOME/.claude/skills/defuddle"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "Installing defuddle skill for Claude Code..."

# Install defuddle CLI if not present
if ! command -v defuddle &>/dev/null; then
  echo "Installing defuddle and jsdom globally..."
  npm install -g defuddle jsdom
else
  echo "defuddle is already installed ($(defuddle --version))"
fi

# Copy skill files
mkdir -p "$SKILL_DIR"
cp "$SCRIPT_DIR/skills/defuddle/SKILL.md" "$SKILL_DIR/SKILL.md"

echo ""
echo "Done! defuddle skill installed to $SKILL_DIR"
echo "Restart Claude Code to activate the skill."
