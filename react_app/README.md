# React Vite Application

This project was extracted from Figma and represents the frontend for the KTPOA website.

## Project Structure

```
react_app/
│
├── public/                    # Static assets
│   └── images/                # Extracted image assets from Figma
│
├── src/                       # Application source code
│   │
│   ├── assets/                # Icons and SVG path definitions
│   │   └── svg-paths.ts
│   │
│   ├── components/            # Reusable UI components
│   │   ├── layout/            # Header, Footer, page wrappers
│   │   ├── shared/            # Common components used across pages
│   │   └── ui/                # Design system primitive components
│   │
│   ├── pages/                 # Page-level components
│   │   ├── Home/
│   │   ├── Registration/
│   │   ├── Contact/
│   │   └── ...                # Events, FAQ, etc.
│   │
│   ├── styles/                # Styling definitions
│   │   └── globals.css
│   │
│   ├── utils/                 # Helper functions
│   │   └── googleSheets.ts
│   │
│   ├── lib/                   # Library utilities/config
│   │   └── utils.ts
│   │
│   ├── App.tsx                # Root React component
│   ├── main.tsx               # React entry point
│   └── vite-env.d.ts          # Vite TypeScript types
│
├── index.html                 # HTML template
├── package.json               # Dependencies + scripts
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
├── postcss.config.js          # PostCSS / Tailwind configuration
├── Guidelines.md              # Extraction guidelines
└── Attributions.md            # Asset attributions
```

## Running the Application

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
