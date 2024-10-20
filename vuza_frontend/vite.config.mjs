// https://github.com/vitejs/vite/discussions/3448
// import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';
import { nodePolyfills } from "vite-plugin-node-polyfills";
import path from 'path'; 

// ----------------------------------------------------------------------

export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  // https://github.com/jpuri/react-draft-wysiwyg/issues/1317
  base: '/',
  define: {
    global: 'window'
  },
  resolve: {
    // alias: {
    //   jsbi: path.resolve(__dirname, "./node_modules/jsbi/dist/jsbi-cjs.js"),
    //   "~@fontsource/ibm-plex-mono": "@fontsource/ibm-plex-mono",
    //   "~@fontsource/inter": "@fontsource/inter",
    // },
    // alias: [
    //   {
    //     find: /^~(.+)/,
    //     replacement: path.join(process.cwd(), 'node_modules/$1')
    //   },
    //   {
    //     find: /^src(.+)/,
    //     replacement: path.join(process.cwd(), 'src/$1')
    //   }
    // ]
  },
  // build: {
  //   commonjsOptions: {
  //     transformMixedEsModules: true,
  //   },
  // },
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000
    port: 5000
  },
  preview: {
    // this ensures that the browser opens upon preview start
    open: true,
    // this sets a default port to 3000
    port: 5000
  }
});
