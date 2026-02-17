# siudak.com

Projekt Next.js skonfigurowany do generowania statycznych stron (SSG).

## Rozpoczęcie pracy

### Instalacja zależności

```bash
npm install
```

### Uruchomienie serwera deweloperskiego

```bash
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

### Budowanie do produkcji (SSG)

```bash
npm run build
```

Strona zostanie wyeksportowana jako statyczne pliki HTML do folderu `out/`.

### Konfiguracja SSG

Projekt jest skonfigurowany do generowania statycznych stron poprzez:

- `output: 'export'` w [next.config.js](next.config.js)
- Wszystkie strony są renderowane podczas budowania
- Wynikowe pliki statyczne znajdują się w folderze `out/`

## Struktura projektu

```
.
├── app/
│   ├── layout.tsx      # Główny layout aplikacji
│   ├── page.tsx        # Strona główna (Hello World)
│   └── globals.css     # Globalne style CSS
├── next.config.js      # Konfiguracja Next.js (SSG)
├── tsconfig.json       # Konfiguracja TypeScript
└── package.json        # Zależności projektu
```

## Technologie

- Next.js 14
- React 18
- TypeScript
- SSG (Static Site Generation)
