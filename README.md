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

The site will be exported as static HTML files to the `out/` folder.

### SSG Configuration

The project is configured for static site generation through:

- `output: 'export'` in [next.config.js](next.config.js)
- All pages are rendered during build time
- Static files are output to the `out/` folder

## Project Structure

```
.
├── app/
│   ├── layout.tsx      # Main application layout
│   ├── page.tsx        # Home page (Hello World)
│   ├── globals.css     # Global CSS styles
│   └── styles/
│       └── variables.css  # Design system variables
├── next.config.js      # Next.js configuration (SSG)
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies
```

## Technologies

- Next.js 14
- React 18
- TypeScript
- SSG (Static Site Generation)
- Prettier (code formatting)

## Design System

All variables are defined in [app/styles/variables.css](app/styles/variables.css) in the `:root` block.
