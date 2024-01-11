import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  site: 'https://bodav.github.io',
  base: '/startpage',
  vite: {
    server: {
      watch: { usePolling: true, interval: 900, binaryInterval: 2000 }
    }
  }
});