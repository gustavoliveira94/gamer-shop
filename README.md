# 🎮 Game Catalog App

A modern web application built with **Next.js**, **Tailwind CSS**, **Jotai**, and **SWR**, allowing users to browse and interact with a game catalog.

## 📁 Project Structure

├── **mocks** # Test mocks  
├── public # Static assets (images, icons, etc.)  
├── src  
│ ├── app # Next.js App Router structure (layouts, pages, routes)  
│ ├── core # Application logic (API services, providers, HOCs, atoms, hooks, utils)  
│ ├── presentation # UI components (views, components)  
│ └── configs # Project-level configurations (tests, etc.)  
├── .env # Environment variables  
├── .eslintrc.json # ESLint configuration  
├── .gitignore # Files ignored by Git  
├── .prettierrc # Prettier code formatter configuration  
├── CHALLENGE.md # Original challenge instructions  
├── jest.config.ts # Jest configuration file  
├── next.config.mjs # Next.js configuration  
├── package.json # Project metadata and scripts  
├── package-lock.json # Dependency lockfile  
├── postcss.config.js # PostCSS configuration  
├── tailwind.config.ts # Tailwind CSS configuration  
├── tsconfig.json # TypeScript configuration  
└── README.md # Project overview and structure

## ⚙️ Tech Stack

- [Next.js (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Jotai](https://jotai.org/)
- [SWR](https://swr.vercel.app/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)

## 📦 Scripts

```bash
yarn install       # Install dependencies
yarn run dev       # Start development server
yarn run build     # Build the app for production
yarn run lint      # Run linter checks
yarn test          # Run unit/integration tests
```

## 🧪 Tests

Run all tests with:

```bash
yarn test
```

## 📒 ENV

Create a .env in the source:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 📄 Notes

SWR client hydration from server is handled using fallback. <br/>
Jotai is used for state management with localStorage persistence for the cart. <br/>
Custom hooks to separate the UI from the logic.
