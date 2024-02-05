import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import { escapeSvelte, mdsvex } from 'mdsvex';
// import { codeToHtml } from 'shiki';
import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md']
	// highlight: {
	// 	highlighter: async (code, lang = 'text') => {
	// 		const html = escapeSvelte(
	// 			codeToHtml(code, {
	// 				lang,
	// 				theme: 'vitesse-dark'
	// 			})
	// 		);
	// 		return `{@html \`${html}\` }`;
	// 	}
	// }
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: true,
			strict: true
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	}
};

export default config;
