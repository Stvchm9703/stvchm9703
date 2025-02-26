// import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-static";
// import UnoCSS from "@unocss/svelte-scoped/preprocess";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess(),
  ],

  kit: {
    // inspector: process.argv.includes('dev'),
    adapter: adapter({
      fallback: "200.html",
      // precompress: true,
      pages: 'build',
      assets: 'build',
      precompress: !process.argv.includes('dev'),
      strict: true
    }),
    prerender: {
      // default: true,
      handleHttpError: "ignore",
      handleMissingId: "ignore",
      handleEntryGeneratorMismatch: "ignore",
      crawl: true,
    },
    // files: {
    //   hooks: "src/hooks",
    // },
    alias: {
      "$lib": "src/lib",
      "$lib/*": "src/lib/*",
      "$assets": "src/assets",
      "$assets/*": "src/assets/*",
    },
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
    }
  },
  compilerOptions: {
    css: "external",
  },
  vitePlugin: {
    inspector: {
      showToggleButton: "always",
    },
  },
};

export default config;
