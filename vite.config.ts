import { defineConfig } from 'vite';
import React from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import presetAttributify from '@unocss/preset-attributify';
import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';

import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		tsconfigPaths(),
		UnoCSS({
			presets: [presetUno(), presetAttributify(), presetIcons()],
		}),
		React(),
	],
});
