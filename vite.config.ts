import tailwindcss from "@tailwindcss/vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import AutoImport from "unplugin-auto-import/vite"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueJsx({
			// options are passed on to @vue/babel-plugin-jsx
		}),
		tailwindcss(),
		AutoImport({
			imports: ["vue"]
		})
	]
})
