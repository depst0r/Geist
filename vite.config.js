import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import viteImagemin from 'vite-plugin-imagemin';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				about: '/pages/about.html',
				project: '/pages/project.html',
				notebook: '/pages/notebook.html',
				stack: '/pages/tech-stack.html',
			},
		},
	},
	plugins: [
		viteImagemin({
			gifsicle: {
				optimizationLevel: 7,
				interlaced: false,
			},
			optipng: {
				optimizationLevel: 7,
			},
			mozjpeg: {
				quality: 50,
			},
			pngquant: {
				quality: [0.8, 0.9],
				speed: 4,
			},
		}),
	],
});
