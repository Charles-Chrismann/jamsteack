// uno.config.ts
import {defineConfig, presetUno, presetWebFonts} from "unocss";
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
	theme: {
		container: {
			center: true,
		}
	},
	presets: [
		presetUno(),
		presetWebFonts({
			provider: "bunny",
			fonts: {
				sans: {
					name: "DM Sans",
					weights: [200, 400, 600, 700],
				},
				mono: 'IBM Plex Mono',
			},
		}),
	],
	transformers: [
		transformerDirectives(),
	]
});
