// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightThemeRapide from 'starlight-theme-rapide'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Sumarizzerrrr',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: true,
      },
      customCss: [
        // Path to your Tailwind base styles:
        './src/styles/global.css',
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/withastro/starlight',
        },
      ],
      plugins: [starlightThemeRapide()],
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
        {
          label: 'Privacy Policy',
          autogenerate: { directory: 'privacy-policy' },
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
})
