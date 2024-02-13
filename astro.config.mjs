import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      // experimentalThemes: {
      // light: 'github-light',
      //   dark: 'github-dark',
      // }
    }
  }
});
