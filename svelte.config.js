/** @type {import('@sveltejs/kit').Config} */
/** const sveltePreprocess = require('svelte-preprocess') **/
import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
const config = {
	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},
	preprocess: [
		preprocess(),
	]
};

export default config;
