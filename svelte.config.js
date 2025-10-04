import { mdsvex } from 'mdsvex';
<<<<<<< HEAD
import adapter from '@sveltejs/adapter-node';
=======
import adapter from '@sveltejs/adapter-vercel';
>>>>>>> 50dd1707d26de04453420718ca780582529b5a2f
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const path_to_layout = join(__dirname, './src/mdsvex.svelte');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex({layout: path_to_layout})],
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapter.
		adapter: adapter(),
		outDir: 'build',
		alias: {
			$lib: 'src/lib',
			$stores: 'src/stores'
		},
	},
	extensions: ['.svelte', '.svx']
};

export default config;
