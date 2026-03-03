# defuddle-skill

A [Claude Code](https://claude.ai/claude-code) skill that wraps [defuddle](https://github.com/kepano/defuddle) — extract clean article content from web pages, removing ads, sidebars, and clutter.

## Install

### Option 1: npx (recommended)

```bash
npx defuddle-skill
```

This will:
1. Install `defuddle` CLI globally (if not already installed)
2. Copy the skill to `~/.claude/skills/defuddle/`

### Option 2: Vercel Skills CLI

```bash
npx skills add joeseesun/defuddle-skill
```

### Option 3: Manual

```bash
git clone https://github.com/joeseesun/defuddle-skill.git
cd defuddle-skill
bash install.sh
```

## What it does

Once installed, Claude Code can automatically extract clean content from any URL:

- **Triggers**: "defuddle", "extract article", "clean this page", "get content from URL"
- **Output**: Clean Markdown or JSON with metadata (title, author, date, word count)

## Usage examples

Ask Claude Code:

```
Extract the article from https://example.com/blog-post
```

```
defuddle this page and give me the markdown: https://example.com/article
```

```
Get the title and author from https://example.com/post
```

## CLI Reference

The skill uses `defuddle` CLI under the hood:

```bash
defuddle parse <url-or-file> [options]

Options:
  -m, --markdown         Convert to Markdown
  -j, --json             Output as JSON with metadata
  -o, --output <file>    Save to file
  -p, --property <name>  Extract single field (title, author, published, etc.)
  --debug                Verbose logging
```

## Credits

- [defuddle](https://github.com/kepano/defuddle) by [@kepano](https://github.com/kepano) — the core extraction engine
- Built for [Claude Code](https://claude.ai/claude-code) by Anthropic

## License

MIT
