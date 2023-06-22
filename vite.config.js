import { defineConfig } from 'vite'
import postcss from './postcss.config.js'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
	registerType: "prompt",
	includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
	manifest: {
		name: "TiedUp.app",
		short_name: "TiedUp",
		description: "For dominants and submissives to track assigned tasks.",
		icons: [
			{
				src: "/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
			{
				src: "/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
				purpose: "apple touch icon",
			},
			{
				src: "/maskable_icon.png",
				sizes: "225x225",
				type: "image/png",
				purpose: "any maskable",
			},
		],
		theme_color: "#171717",
		background_color: "#e8ebf2",
		display: "standalone",
		scope: "/",
		start_url: "/",
		orientation: "portrait",
	},
};

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env,
    ...(process.env.NODE_ENV === 'production' ? {} : { global: 'window' }),
  },
  css: {
    postcss,
  },
  plugins: [react(), VitePWA(manifestForPlugin)],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, '')
        },
      },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    outDir: 'build'
  },
})
