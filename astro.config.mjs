// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from '@astrojs/markdoc';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'CLEVER°FLOW',
          logo: {
              src: './src/assets/setonix_logo.png',
          },
          social: [
			  {
				icon: 'github',
				label: 'GitHub',
				href: 'https://github.com/cleverflow-ai'
			  }
		  ],
          sidebar: [
              {
                  label: 'Concepts',
                  items: [
                      {
                          label: 'Breakthrough',
                          slug: 'concepts/breakthrough'
                      },
                  ],
              },
              {
                  label: 'Guides',
                  items: [
                      {
                          label: 'Example Guide',
                          slug: 'guides/example'
                      },
                  ],
              },
              {
                  label: 'Use Cases',
                  autogenerate: {
                      directory: 'use-cases'
                  },
              },
          ],
          customCss: ['./src/styles/global.css'],
      }),
      markdoc(),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});