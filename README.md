# Mistborn Atlas

> **UNOFFICIAL FAN PROJECT** — This is a fan-made project and is not affiliated with, endorsed by, or connected to Brandon Sanderson, Dragonsteel Entertainment, Tor Books / Macmillan Publishers, or Isaac Stewart. All Mistborn content — characters, locations, storylines, and artwork — are the property of their respective copyright holders. This project is created for educational and entertainment purposes only.

**[www.mistbornatlas.com](https://www.mistbornatlas.com)**

*"There's always another secret."* — Kelsier

An interactive timeline map for Brandon Sanderson's Mistborn Original Trilogy, tracking character movements and locations across the Final Empire.

## Roadmap

| Version | Milestone | Status |
|---------|-----------|--------|
| **v0.7.0** | The Final Empire — timeline complete | **← in progress** |
| **v0.8.0** | The Well of Ascension — timeline complete | |
| **v0.9.0** | The Hero of Ages — timeline complete | |
| **v1.0.0** | Secret History — timeline complete | |

## Features

- Interactive maps of the Final Empire world, Luthadel, Urteau, and Fadrex City
- Character path tracking for 6 major characters (Vin, Kelsier, Sazed, Elend, Marsh, Spook)
- Timeline playback through all three books with chapter-by-chapter navigation
- Spoiler protection — characters and titles only appear after their debut
- Atmospheric effects — falling ash, creeping mists, and mist reveal transitions
- Allomantic metal symbol markers for all location types
- 11 languages (English, Spanish, French, German, Polish, Portuguese, Russian, Chinese, Japanese, Arabic, Swedish)

## Getting Started

### Prerequisites

- Node.js 18+
- yarn

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build
```

## Tech Stack

- React 18 + TypeScript
- Vite
- Leaflet.js + react-leaflet
- SCSS Modules
- tsParticles (ash & mist effects)

## Project Structure

```
src/
├── config.ts            # Centralised application configuration
├── components/          # React components
│   ├── AboutModal/      # Info & attribution modal
│   ├── AtmosphereOverlay/ # Falling ash & mist particles
│   ├── CharacterFilters/ # Character visibility controls
│   ├── CharacterMarker/ # Portrait markers on the map
│   ├── CharacterPath/   # Travel path lines
│   ├── CityLandmarkMarker/ # City-level landmark markers
│   ├── CityMapContainer/ # City map view (Luthadel, Urteau, Fadrex)
│   ├── CityPrompt/      # City enter/exit prompt
│   ├── ControlsPanel/   # Left sidebar controls
│   ├── Header/          # Top bar with book/map selectors
│   ├── Legend/           # Map legend
│   ├── LoadingScreen/   # Ash-themed loading screen
│   ├── LocationMarker/  # World map location markers
│   ├── MapContainer/    # Main world map view
│   └── Timeline/        # Chapter timeline slider & playback
├── context/             # React contexts (map state, hover, language)
├── data/                # JSON data files
│   ├── books.json       # Book definitions (chapters, etc.)
│   ├── characters.json  # Character definitions & portrait config
│   ├── locations.json   # World map locations with coordinates
│   ├── cityMaps.json    # City map definitions & landmarks
│   └── movements/       # Per-character movement files
│       ├── vin.json
│       ├── kelsier.json
│       ├── sazed.json
│       ├── elend.json
│       ├── marsh.json
│       └── spook.json
├── i18n/                # Internationalization
│   ├── types.ts         # Translation type definitions
│   ├── index.ts         # Language registry & exports
│   └── locales/         # Per-language translation files
│       ├── en.ts        # English UI strings
│       ├── en-data.ts   # English data translations (auto-generated from JSON)
│       ├── es.ts / es-data.ts  # Spanish
│       ├── fr.ts / fr-data.ts  # French
│       ├── de.ts / de-data.ts  # German
│       ├── pl.ts / pl-data.ts  # Polish
│       ├── pt.ts / pt-data.ts  # Portuguese
│       ├── ru.ts / ru-data.ts  # Russian
│       ├── zh.ts / zh-data.ts  # Chinese (Simplified)
│       ├── ja.ts / ja-data.ts  # Japanese
│       ├── ar.ts / ar-data.ts  # Arabic
│       └── sv.ts / sv-data.ts  # Swedish
├── hooks/               # Custom React hooks
├── services/            # Utility services
├── styles/              # Global SCSS styles & mixins
├── types/               # TypeScript type definitions
└── utils/               # Utility functions
public/
├── characters/          # Character portrait images
├── maps/                # Map image assets
└── symbols/             # Allomantic metal symbol SVGs
```

### `src/config.ts` — Centralised Configuration

All tunable application constants live in a single file: `src/config.ts`. **If you need to change a value — a colour, a timing, a map bound, a marker size — look here first.** This is the single source of truth for everything configurable in the app.

What it contains:

- **Timing** — playback interval, loading screen duration, popup delays
- **World map geometry** — image URL, bounds, max bounds, centre, zoom levels
- **City map geometry** — same as above for Luthadel, Urteau, and Fadrex
- **Markers & paths** — icon sizes, anchor points, offsets, tooltip/popup styling, z-index
- **UI** — description truncation limit, ash particle count
- **Donation** — chapter interval between prompts, Ko-fi URL
- **Defaults** — default book, default language
- **Storage keys** — localStorage key names
- **Validation lists** — valid books, characters, map views, cities
- **Character config** — colours, portrait images, book colours, book ordering
- **Location themes** — Allomantic metal assignments, colours, and labels for every location and city landmark type
- **Portrait attributions** — image paths, artist names, and URLs for the About modal

Other modules import from `@/config` rather than defining their own constants. This keeps magic numbers out of component files and makes the app easy to reconfigure without hunting through dozens of files.

### Debug Mode and Coordinate Plotting

Append `?dbg=1` to the URL (e.g. `http://localhost:5173/?dbg=1`) to activate a **coordinate overlay** on both the world map and city maps. This is essential when adding or adjusting location coordinates.

What it does:

- **Clears saved state** — localStorage is wiped on load so you always start fresh.
- **Crosshair cursor** — the map cursor changes to a crosshair for precise placement.
- **Live coordinate readout** — a panel in the top-right corner shows the current `[x, y]` position as you move the mouse.
- **Freeze & copy** — left-click to freeze the coordinate display; click the formatted `[x, y]` value to copy it to the clipboard. Right-click to unfreeze and resume tracking.
- **Back button hidden** — the city map back/exit buttons are hidden so they don't interfere with coordinate picking.
- **Works on both maps** — the overlay is present on the world map and on every city map, with the panel labelled accordingly.

The copied coordinates are in the exact format used in `locations.json` and movement data files, so you can paste them directly.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests. Areas where help is especially needed:

- **Translation corrections** — native speakers verifying AI-generated translations
- **Movement data** — verifying character positions against the books
- **Location accuracy** — checking map placements against source material
- **Bug reports** — anything that looks off

### AI Usage & Code Assistants

**AI-assisted contributions are welcome.** Using AI tools (GitHub Copilot, ChatGPT, Claude, etc.) while working on this project is totally fine — they're great for research, prototyping, translations, and moving faster. If they help you contribute, use them.

The one rule: **understand what the AI produces before you commit it.** AI is a tool, not a substitute for thinking. If you're opening a PR, you should be able to explain every change in it — what it does, why it's needed, and what edge cases it might have. Clean, readable code and passion matter more than speed. Review AI output, test it, and make sure it fits the project's patterns.

> **Note:** `.github/copilot-instructions.md` is gitignored — it contains personal AI workflow directives used for local development only. This is intentional: the repo should not ship with opinionated agent instructions that silently alter how contributors' AI tools behave. If a shared Copilot config is ever needed, it will be discussed and agreed on openly first.

For context on how AI has been used so far: I've used it extensively as a **discussion partner** — bouncing ideas, researching official translations across 11 languages, verifying publisher-specific terminology, and generating first-pass translation files that native speakers can then correct. It's been invaluable for writing English (not a native speaker ^^) as well.

The core architecture, component design, data modelling, location plotting, and UX decisions are the result of many hours of hands-on development (and that's not counting the reading — and now re-reading — of the source material). AI helped me move faster in places; it didn't build this for me.

### Issue Labels

When opening an issue, apply the relevant label to help with triage:

| Label | Description |
|-------|-------------|
| `bug` | Something isn't working |
| `enhancement` | New feature or request |
| `translation` | Translation review or correction |
| `movement-data` | Character position/path tracking per chapter |
| `characters` | Character definitions, portraits, or filters |
| `locations` | Map locations, coordinates, or descriptions |
| `city-maps` | City-level maps (Luthadel, Urteau, Fadrex) |
| `timeline` | Timeline playback, chapter navigation |
| `atmosphere` | Ash, mist, and visual effects |
| `help wanted` | Extra attention is needed |
| `good first issue` | Good for newcomers |

## Translations — How to Help

Translations are currently **AI-generated and not yet verified** by native speakers. Each language has two files in `src/i18n/locales/`:

- **`{lang}.ts`** — UI strings (buttons, labels, modal text, tooltips)
- **`{lang}-data.ts`** — In-world content (location names, character names, book titles, movement descriptions, Allomantic terminology)

### What needs checking

1. **Character names** — Do they match the official published translation in your language?
2. **Location names** — Cities, landmarks, ashmounts, etc.
3. **Book titles** — Should use the official publisher's title
4. **Movement descriptions** — Chapter-by-chapter event text for each character
5. **Allomantic terminology** — Metal names, titles (Lord Ruler, Mistborn, Keeper, etc.)
6. **UI strings** — General UI text, grammar, natural phrasing

### Confidence levels

Each data translation entry can have a confidence level from AI:
- `'human'` — **set this status** when you have verified or fixed it. This is the only legit status.
- `'verified'` — AI-generated, but AI says it is confirmed from an official published edition
- `'probable'` — AI-generated, Likely correct based on research but not fully confirmed
- `'unconfirmed'` — AI-generated, needs native speaker review

### Supported languages

| Code | Language | Publisher | Status |
|------|----------|-----------|--------|
| `en` | English | Tor Books | Primary |
| `es` | Spanish | Nova / Ediciones B | Needs review |
| `fr` | French | Calmann-Lévy / Orbit | Needs review |
| `de` | German | Heyne / Piper | Needs review |
| `pl` | Polish | Wydawnictwo MAG | Needs review |
| `pt` | Portuguese | Leya / Trama | Needs review |
| `ru` | Russian | Azbooka-Atticus / Eksmo | Needs review |
| `zh` | Chinese (Simplified) | Chongqing Publishing House | Needs review |
| `ja` | Japanese | Hayakawa Publishing | Needs review |
| `ar` | Arabic | Kayan / Dar Al-Tanweer | Needs review |
| `sv` | Swedish | Modernista | Needs review |

If you're a native speaker of any of these languages and know the official Mistborn terminology, your corrections would be hugely valuable!

## Attribution

### Maps

The maps used in this project are **Isaac Stewart's official Final Empire maps**, sourced from the [Coppermind Wiki](https://coppermind.net/wiki/File:Final_Empire_Map.jpg).

- **Artist**: Isaac Stewart
- **Source**: [Coppermind Wiki](https://coppermind.net)
- **Original Work**: Created for Brandon Sanderson's Mistborn series

### Character Portraits

Character portraits are sourced from the [Coppermind Wiki](https://coppermind.net) under CC BY-NC-ND 4.0, by artists including Miranda Meeks, Diego López, Shayndlart, eyeronis, and Lazifyre.

### Allomantic Symbols

Steel Alphabet glyphs by Isaac Stewart, sourced from the Coppermind Wiki under CC BY-SA 3.0.

### Copyright Notice

- **Mistborn** is a registered trademark of Dragonsteel Entertainment, LLC
- Map artwork © Isaac Stewart
- Book content © Brandon Sanderson

### Fair Use

This project is a non-commercial fan work intended for personal use and community enjoyment. If you are a rights holder and have concerns about this project, please contact the repository maintainer.

## Support

This is a free, ad-free fan project. If you'd like to support it, you can [buy me a coffee on Ko-fi](https://ko-fi.com/picklenickdev).

## License

This project's source code is licensed under the [Apache License 2.0](LICENSE). You are free to use, modify, and distribute it, provided you include attribution and the license text. See the [NOTICE](NOTICE) file for required attribution.

This license does not extend to the Mistborn intellectual property or Isaac Stewart's artwork, which remain under their respective copyrights.
