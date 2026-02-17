# siudak.com

Next.js project configured for Static Site Generation (SSG).

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production (SSG)

```bash
npm run build
```

- Then directory ./out with all static files will be creted
- To test static files use: `npx serve@latest out`

### SSG Configuration

The project is configured for static site generation through:

- `output: 'export'` in [next.config.js](next.config.js)
- All pages are rendered during build time
- Static files are output to the `out/` folder

## Project Structure

```
.
├── app/
│   ├── [locale]/          # Internationalized routes
│   │   ├── layout.tsx     # Locale-specific layout
│   │   └── page.tsx       # Home page
│   ├── components/        # React components
│   │   ├── header/
│   │   └── language-switcher/
│   ├── styles/
│   │   └── variables.css  # Design system variables
│   ├── globals.css        # Global CSS styles
│   └── layout.tsx         # Root layout
├── i18n/                  # Internationalization config
│   ├── request.ts         # i18n request configuration
│   └── routing.ts         # Route configuration
├── messages/              # Translation files
│   ├── en.json           # English translations
│   └── pl.json           # Polish translations
├── next.config.js         # Next.js configuration (SSG)
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## Technologies

- Next.js 14
- React 18
- TypeScript
- next-intl (internationalization)
- SSG (Static Site Generation)
- Prettier (code formatting)

## Internationalization

The project supports multiple languages (English and Polish) using `next-intl`:

- Translation files are located in the `messages/` folder
- Language switcher is available in the header
- Static pages are generated for all locales during build
- Routes: `/` (default: English), `/pl` (Polish)

To add a new language:

1. Create a new JSON file in `messages/` (e.g., `de.json`)
2. Add the locale to `i18n/routing.ts` in the `locales` array
3. Rebuild the project

## Design System

See [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for details on CSS variables and spacing system.

All variables are defined in [app/styles/variables.css](app/styles/variables.css) in the `:root` block.
