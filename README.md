# Frontend Assessment 09/2025

Welcome! This is a small Next.js project created as part of a technical assessment. The app demonstrates modern React, TypeScript, and Tailwind CSS usage, with a focus on clean code and best practices.

## Live Demo

You can preview the deployed application here: [https://frontend-assessment-09-2025.onrender.com/](https://frontend-assessment-09-2025.onrender.com/)

## Features

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Prettier & ESLint for code quality
- Simple UI components and theming

## Getting Started

### 1. Clone the repository

```
git clone <repo-url>
cd frontend-assessment-09-2025
```

### 2. Install dependencies

Using npm:

```
npm install
```

Or with yarn:

```
yarn install
```

### 3. Run the development server

```
npm run dev
```

Or with yarn:

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Linting & Formatting

- **Lint:**
  ```
  npm run lint
  ```
- **Format:**
  ```
  npx prettier --write .
  ```

## Project Structure

- `src/app/` – App entry, layout, and pages
- `src/components/` – UI components
- `src/contexts/` – React context providers
- `src/styles/` – Global styles and fonts
- `public/` – Static assets

## Notes

- Prettier is configured with Tailwind CSS plugin for consistent class sorting.
- ESLint is set up for Next.js and TypeScript best practices.
- To change the theme, use the ThemeSwitcher component in the UI.

---

If you have any questions, feel free to reach out!
