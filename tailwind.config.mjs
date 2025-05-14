import colors from 'tailwindcss/colors';
import starlightPlugin from '@astrojs/starlight-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mdoc}'],
	theme: {
		extend: {
			colors: {
				accent: colors.orange,
				gray: colors.zinc,
			},
		},
	},
	plugins: [starlightPlugin()],
};
