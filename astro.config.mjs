import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://camas-facenco.github.io/',
  base: '/team-profiles',
  integrations: [tailwind()]
});