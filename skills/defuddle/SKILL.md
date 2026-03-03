---
name: defuddle
description: Extract clean article content from web pages or local HTML files. Removes clutter (ads, sidebars, nav) and returns readable content with metadata.
trigger: Use when user wants to extract/clean web page content, strip clutter from HTML, get article text from a URL, or convert web pages to clean markdown. Triggers include "defuddle", "extract article", "clean this page", "get content from URL", "strip clutter", "web extract".
---

# Defuddle - Web Content Extraction

Extract main article content from web pages, removing ads, sidebars, navigation, and other clutter. Returns clean HTML or Markdown with metadata (title, author, published date, description, word count).

## Prerequisites

Before first use, check if `defuddle` is installed:

```bash
command -v defuddle >/dev/null 2>&1 || npm install -g defuddle jsdom
```

If the command is not found, install it automatically with `npm install -g defuddle jsdom`.

## CLI Reference

```bash
defuddle parse <source> [options]
```

**Arguments:**
- `<source>` — URL (`https://...`) or local HTML file path

**Options:**
| Flag | Description |
|------|-------------|
| `-m, --markdown` | Convert content to Markdown |
| `-j, --json` | Output as JSON with full metadata |
| `-o, --output <file>` | Write to file instead of stdout |
| `-p, --property <name>` | Extract single property (title, description, domain, author, published, wordCount, content) |
| `--debug` | Verbose logging |

## Usage Patterns

### Extract article as Markdown (most common)
```bash
defuddle parse "https://example.com/article" -m
```

### Get full metadata as JSON
```bash
defuddle parse "https://example.com/article" -j
```

### Get Markdown + metadata combined
```bash
defuddle parse "https://example.com/article" -m -j
```

### Extract specific property
```bash
defuddle parse "https://example.com/article" -p title
defuddle parse "https://example.com/article" -p author
defuddle parse "https://example.com/article" -p published
```

### Save to file
```bash
defuddle parse "https://example.com/article" -m -o output.md
```

### Parse local HTML file
```bash
defuddle parse page.html -m -j
```

## JSON Response Fields

When using `-j`, the response includes:
- `title` — Article title
- `author` — Author name
- `published` — Publication date
- `description` — Meta description
- `content` — Extracted HTML (or Markdown if `-m` used)
- `domain` — Source domain
- `favicon` — Favicon URL
- `image` — Featured image URL
- `site` — Site name
- `wordCount` — Word count
- `parseTime` — Processing time in ms
- `metaTags` — Array of meta tags
- `schemaOrgData` — Structured data from the page

## Workflow Integration

### Get title + content for further processing
```bash
TITLE=$(defuddle parse "URL" -p title)
defuddle parse "URL" -m -o "${TITLE}.md"
```

### Pipe to other tools
```bash
defuddle parse "URL" -m | head -20  # Preview first 20 lines
defuddle parse "URL" -j | jq '.title, .author, .wordCount'  # Extract fields
```

## Notes
- Requires Node.js and npm
- `jsdom` is required as a peer dependency (installed alongside defuddle)
- Works best with article-style pages (blogs, news, documentation)
- Not designed for SPAs or JavaScript-heavy pages that require rendering
