import { fileURLToPath } from 'node:url'
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/tests/setup.ts",
	},
	resolve: {
		alias: [
			{ find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
		]
	},
	build: {
		target: "ES2022",
		emptyOutDir: true,
		outDir: "build",
		rollupOptions: {
			// Flatten because I had issues with nested folders in nginx
			output: {
				entryFileNames: "[name].js",
				chunkFileNames: "[name].js",
				assetFileNames: "[name].[ext]",
			},
		},
	},
});
