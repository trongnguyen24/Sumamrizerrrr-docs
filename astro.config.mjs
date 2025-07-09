// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Sumarizzerrrr',
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
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
      components: {
        // Override the default `SocialIcons` component.
        PageTitle: './src/components/EmptyPageTitle.astro',
        ContentPanel: './src/components/Empty.astro',
        Header: './src/components/EmptyHeader.astro',
      },
      plugins: [starlightThemeRapide()],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            {
              label: 'What is Summarizerrrr?',
              link: '/what-is-summarizerrrr',
            },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Guides Overview', link: '/guides/guidance' },
            { label: 'Quick Start Guide', link: '/guides/quick-start' },
            {
              label: 'Complete User Guide',
              link: '/guides/complete-guide',
            },
            {
              label: 'Customization Settings',
              link: '/guides/customization',
            },
            {
              label: 'Video Summarization',
              link: '/guides/video-summarization',
            },
            {
              label: 'Advanced Features',
              link: '/guides/advanced-features',
            },
            {
              label: 'Troubleshooting Guide',
              link: '/guides/troubleshooting',
            },
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
    icon(),
    svelte(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
