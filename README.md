# DPC Frontend Application

A React + TypeScript + Vite application for sports match tracking and statistics, featuring a modern design system with light/dark theme support.

## Design System

### Theme Architecture

The application uses CSS custom properties (variables) for a comprehensive theming system defined in `src/index.css`. All colors are theme-driven—no hardcoded hex values in components.

#### Light Theme
- **Primary Background**: `#FFFFFF`
- **Surface Background**: `#F3B91A1A` (10% opacity yellow tint)
- **Header Background**: `#FEF8E9` (light cream)
- **Card Background**: `#FFFFFF`
- **Primary Text**: `#1D2B3A` (dark navy)
- **Secondary Text**: `#8B95A1` (gray)
- **Accent Color**: `#F3B91A` (yellow)
- **Live Indicator**: `#EF4444` (red)
- **Hero Background**: `#F3B91A` (yellow)

#### Dark Theme
- **Primary Background**: `#1D2B3A` (dark navy)
- **Surface Background**: `#3D5266` (slate)
- **Header Background**: `#3D5266` (slate)
- **Card Background**: `#3D52664D` (semi-transparent slate)
- **Primary Text**: `#FFFFFF`
- **Secondary Text**: `#8B95A1` (gray)
- **Accent Color**: `#F3B91A` (yellow - consistent across themes)
- **Live Indicator**: `#EF4444` (red)
- **Hero Background**: `#3D52664D` (semi-transparent)

### Component Structure

```
src/
├── components/
│   ├── Header.tsx          # Top navigation with search, notifications, user profile
│   ├── Sidebar.tsx         # Left sidebar with navigation icons and theme toggle
│   ├── HeroBanner.tsx      # Featured match banner with player image and CTA
│   ├── LatestMatches.tsx   # Match cards with filters and meta information
│   ├── LeftPanel.tsx      # Container for sidebar widgets
│   ├── LiveMatchWidget.tsx # Live match display with odds
│   ├── LeagueTable.tsx     # League standings table
│   └── TrendingWidget.tsx  # Trending matches widget
├── context/
│   └── ThemeContext.tsx    # Theme provider with toggle functionality
├── data/
│   └── mockData.ts         # Mock data for matches and league tables
└── index.css              # Theme variables and global styles
```

### Key Design Features

1. **Theme Toggle**: Switch between light and dark modes via the sidebar menu button
2. **Selected State Indicators**: Red line indicators on selected navigation items (Header: top line, Sidebar: left line)
3. **Responsive Layout**: Fixed sidebar (72px) with scrollable main content area
4. **Card-based UI**: Rounded cards with subtle shadows and borders
5. **Accent-driven Interactions**: Hover states and selected items use the accent color
6. **Anti-FOUC**: Theme class applied before render to prevent flash of unstyled content

### Typography

- **Font Family**: Roboto, system-ui, -apple-system, sans-serif
- **Navigation**: 14px font-medium
- **Headings**: 18px font-semibold
- **Body Text**: 14px regular
- **Secondary Text**: 12px

### Color Variables Reference

| Variable | Light Mode | Dark Mode | Usage |
|----------|------------|-----------|-------|
| `--bg-main` | #FFFFFF | #1D2B3A | Main page background |
| `--bg-surface` | #F3B91A1A | #3D5266 | Sidebar/surface backgrounds |
| `--bg-card` | #FFFFFF | #3D52664D | Card backgrounds |
| `--header-bg` | #FEF8E9 | #3D5266 | Header background |
| `--text-primary` | #1D2B3A | #FFFFFF | Primary text |
| `--text-secondary` | #8B95A1 | #8B95A1 | Secondary text |
| `--accent` | #F3B91A | #F3B91A | Accent/highlight color |
| `--live-indicator` | #EF4444 | #EF4444 | Live status indicator |
| `--card-border` | #E5E7EB | #3D5266 | Card borders |

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
