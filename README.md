# siudak.com

Next.js project configured for Server-Side Rendering (SSR).

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

### Build for Production (SSR)

```
docker-compose up --build -d
```

To run it withou docker:

```bash
npm run build
npm run start
```

The production server will start on [http://localhost:3000](http://localhost:3000).

### SSR Configuration

The project is configured for server-side rendering:

- Middleware handles automatic language detection and redirects
- Pages are rendered on each request
- Locale detection via cookies and `Accept-Language` header
- SEO-friendly server-side redirects

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
├── middleware.ts          # Next.js middleware (locale detection)
├── next.config.js         # Next.js configuration (SSR)
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## Technologies

- Next.js 14
- React 18
- TypeScript
- next-intl (internationalization)
- SSR (Server-Side Rendering)
- Prettier (code formatting)

## Internationalization

The project supports multiple languages (English and Polish) using `next-intl`:

- Translation files are located in the `messages/` folder
- Language switcher is available in the header
- Automatic language detection via middleware:
  1. Checks cookie (`NEXT_LOCALE`)
  2. Falls back to browser's `Accept-Language` header
  3. Saves detected language to cookie for future visits
- Routes: `/` (auto-redirect), `/en` (English), `/pl` (Polish)

### How Language Detection Works

When a user visits `/`:

1. **Middleware checks cookie**: If `NEXT_LOCALE` cookie exists, redirects to that locale
2. **Browser language detection**: If no cookie, reads `Accept-Language` header
3. **Sets cookie and redirects**: Saves detected locale and redirects to `/en` or `/pl`

This approach is **SEO-friendly** as redirects happen server-side.

To add a new language:

1. Create a new JSON file in `messages/` (e.g., `de.json`)
2. Add the locale to `i18n/routing.ts` in the `locales` array
3. Update `SUPPORTED_LOCALES` in `middleware.ts`
4. Restart the server

## Design System

See [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for details on CSS variables and spacing system.

All variables are defined in [app/styles/variables.css](app/styles/variables.css) in the `:root` block.
