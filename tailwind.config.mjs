import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				monomaniacone: ['Monomaniac One', ...defaultTheme.fontFamily.sans],
				kiwimaru: ['Kiwi Maru', ...defaultTheme.fontFamily.serif],
			  },
		},
	},
	plugins: [],
}
