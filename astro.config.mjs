// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	site: 'https://aprendendo-machine-learning.vercel.app',
	integrations: [mdx({
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
  }), sitemap()],

	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
});
