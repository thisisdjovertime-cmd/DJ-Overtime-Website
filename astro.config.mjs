import { defineConfig } from 'astro/config';

// Update `site` to the final production domain before launch.
export default defineConfig({
  site: 'https://www.thisisovertime.com',
  build: { inlineStylesheets: 'auto' },
});
