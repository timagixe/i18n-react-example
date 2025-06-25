# How to Start the Project

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version 18 or higher recommended)
- **bun** package manager

## Installation

1. **Clone the repository** (if not already done):

    ```bash
    git clone <repository-url>
    cd i18n-react-example
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```
    or if using bun:
    ```bash
    bun install
    ```

## Development

### Start Development Server

To start the development server with hot reload:

```bash
npm run dev
```

or

```bash
bun run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Available Scripts

- **`npm run dev`** or **`bun run dev`** - Start development server with Vite
- **`npm run build`** or **`bun run build`** - Build the project for production (TypeScript compilation + Vite build)
- **`npm run preview`** or **`bun run preview`** - Preview the production build locally
- **`npm run lint`** or **`bun run lint`** - Run ESLint to check code quality
- **`npm run format`** or **`bun run format`** - Format code with Prettier
- **`npm run format:check`** or **`bun run format:check`** - Check if code is properly formatted
- **`npm run type:check`** or **`bun run type:check`** - Run TypeScript type checking without emitting files

## Project Structure

This is a React application built with:

- **Vite** - Build tool and development server
- **TypeScript** - Type safety
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling with Zod validation
- **Tailwind CSS** - Styling framework
- **Radix UI** - Accessible UI components
- **Lucide React** - Icon library

## Development Workflow

1. Start the development server: `npm run dev` or `bun run dev`
2. Make your changes in the `src/` directory
3. The browser will automatically reload with your changes
4. Run `npm run lint` or `bun run lint` to check for code issues
5. Run `npm run format` or `bun run format` to format your code
6. Run `npm run type:check` or `bun run type:check` to verify TypeScript types

## Building for Production

To create a production build:
```bash
npm run build
```
or
```bash
bun run build
```

To preview the production build:
```bash
npm run preview
```
or
```bash
bun run preview
```

## Code Quality

- **ESLint** is configured for code linting
- **Prettier** is configured for code formatting
- **TypeScript** provides type checking

Run these commands to ensure code quality:
```bash
npm run lint
npm run format:check
npm run type:check
```
or with bun:
```bash
bun run lint
bun run format:check
bun run type:check
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
    extends: [
        // Remove ...tseslint.configs.recommended and replace with this
        ...tseslint.configs.recommendedTypeChecked,
        // Alternatively, use this for stricter rules
        ...tseslint.configs.strictTypeChecked,
        // Optionally, add this for stylistic rules
        ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
        // other options...
        parserOptions: {
            project: ["./tsconfig.node.json", "./tsconfig.app.json"],
            tsconfigRootDir: import.meta.dirname,
        },
    },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
    plugins: {
        // Add the react-x and react-dom plugins
        "react-x": reactX,
        "react-dom": reactDom,
    },
    rules: {
        // other rules...
        // Enable its recommended typescript rules
        ...reactX.configs["recommended-typescript"].rules,
        ...reactDom.configs.recommended.rules,
    },
});
```
