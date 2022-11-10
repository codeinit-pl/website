import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import vue from '@astrojs/vue';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: 'https://codeinit.pl',
  integrations: [mdx(), sitemap(), vue({
    appEntrypoint: '/src/vue.ts'
  }), tailwind(), compress(), compressor()]
});
