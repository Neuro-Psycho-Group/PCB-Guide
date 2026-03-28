# PCB Primer

A complete beginner's guide to printed circuit board design, fabrication, and assembly — built as a static site compatible with GitHub Pages.

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Home page with site overview and learning path |
| `history.html` | History of PCBs from 1903 to today |
| `anatomy.html` | Interactive layer cross-section diagram |
| `components.html` | THT vs SMD, all component types, package codes |
| `workflow.html` | Full design workflow: schematic → Gerbers |
| `fabrication.html` | Manufacturing process, surface finishes, fab houses |
| `soldering.html` | Equipment, technique, defects, safety |
| `software.html` | EDA tool comparison: KiCad, EasyEDA, Altium |
| `glossary.html` | 60+ PCB terms, searchable |

## Hosting on GitHub Pages

1. Create a new GitHub repository
2. Upload all files maintaining the folder structure:
   ```
   /
   ├── index.html
   ├── history.html
   ├── anatomy.html
   ├── components.html
   ├── workflow.html
   ├── fabrication.html
   ├── soldering.html
   ├── software.html
   ├── glossary.html
   ├── css/
   │   └── main.css
   └── js/
       └── main.js
   ```
3. Go to Settings → Pages → Source: Deploy from branch → main → / (root)
4. Your site will be live at `https://yourusername.github.io/repo-name/`

## Features

- **Shared navigation** — injected by `js/main.js` across all pages
- **Shared footer** — same injection approach
- **Interactive diagrams** — SVG-based, click to explore
- **Scroll reveal animations** — CSS + IntersectionObserver
- **Tabs** — component type categories on components page
- **Searchable glossary** — live filter on the glossary page
- **Fully responsive** — mobile navigation with hamburger menu
- **Light theme** — PCB-inspired green and copper palette
- **No dependencies** — pure HTML/CSS/JS, no framework required

## Expanding the Site

To add a new page:
1. Copy any existing page as a template
2. Update the `<title>` and `<meta description>` tags
3. Change the `page-label` and `<h1>` in the `.page-header`
4. Add a link to the nav in `js/main.js` inside `NAV_HTML` and the footer `FOOTER_HTML`
5. Add a `data-page="yourpage.html"` attribute to the nav link for active state highlighting

## Design System

All design tokens are CSS variables in `css/main.css`:
- `--green-deep`, `--green`, `--green-light` — PCB board greens
- `--copper`, `--copper-light` — copper trace colours  
- `--gold`, `--gold-light` — solder/ENIG golds
- `--bg`, `--bg-card`, `--bg-board` — background layers
- `--font-mono` — Share Tech Mono (monospace, PCB aesthetic)
- `--font-serif` — Crimson Pro (headings)
- `--font-sans` — Source Sans 3 (body text)
