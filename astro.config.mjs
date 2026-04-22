import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://catherinemaglasang.github.io',
  base: '/cv',
  outDir: './dist',
  build: {
    assets: '_astro'
  }
});
