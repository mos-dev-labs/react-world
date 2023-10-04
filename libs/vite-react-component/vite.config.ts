import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { extname, relative } from 'path'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      insertTypesEntry: true
    }),
    tsconfigPaths()
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob.sync('src/**/*.{ts,tsx}').map((file) => [
          // 1. The name of the entry point
          // lib/nested/foo.js becomes nested/foo
          relative('src', file.slice(0, file.length - extname(file).length)),
          // 2. The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js'
      }
    }
  }
})
