import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  // Next.js recommended rules (Core Web Vitals)
  ...nextVitals,

  // Disable ESLint rules that conflict with Prettier
  prettier,

  // Global ignores
  globalIgnores(['.next/**', 'out/**', 'build/**', 'node_modules/**', 'pnpm-lock.yaml']),
]);
