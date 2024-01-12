import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: 'https://camas-facenco.github.io/team-profiles/',
  integrations: [tailwind()]
});