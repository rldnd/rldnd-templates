# vite-react template

## How To Use

```
  npx rldnd-cli
```

## Tech Stack

- Vite
- React
- Typescript
- Sass ( scss ), CSS Module
- React-Query
- Recoil

---

### vite.config.ts

If you want modify css modules hashPrefix

```ts
export default defineConfig({
  ...
   css: {
    modules: {
      ...
      hashPrefix: 'CHANGE_HERE',
    },
  },
  ...
});
```

- vite-plugin-svgr

  - Transform SVGs into React components

- vite-plugin-checker

  - Run TypeScript, VLS, vue-tsc, ESLint, Stylelint in worker thread.

- vite-plugin-env-compatible
  - To load env `process.env`
