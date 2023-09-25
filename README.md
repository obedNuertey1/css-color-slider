# React + TypeScript + Vite + Sass + Cypress Testing Support + Tailwindcss Complete Setup
> # Feel Free to *Fork* this Repository

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Getting things started
```npm run dev``` to start the development server and
```npx cypress open``` to start writing tests

# Info About this site
## Visit the site below to see the webpage associated to this code

[Visit-this-site](https://tailwindcss-color-slider.netlify.app/)

## App Architecture/FlowChart

```mermaid
graph TD
  subgraph "App.tsx file"
    A[App]
    B[colorSlides] --> C
    B --> D
    C[colorsExclusivePerSlide]
    D[displaySlides] --> A
  end
  subgraph "Color.tsx file"
    E[namespace Color]
    F[interface Icolor] --> C
    G[class ColorSlides] --> B
    F --> G
  end
  style A stroke:#DBA075,stroke-width:2px
  style B stroke:#DBA075,stroke-width:2px
  style C stroke:#DBA075,stroke-width:2px
  style D stroke:#DBA075,stroke-width:2px
  style E stroke:#73A260,stroke-width:2px
  style F stroke:#73A260,stroke-width:2px
  style G stroke:#73A260,stroke-width:2px
  E --> F
  E --> G
```
