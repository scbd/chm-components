import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { terser } from 'rollup-plugin-terser';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry:  'src/index.js',
      name: 'CHM-icons',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      input: 'src/index.js',
      output: [
        {
          dir: 'dist',
          format: 'cjs',
          exports: 'named',
          globals: {
            vue: 'Vue'
          },
        },
        {
          dir: 'dist',
          format: 'esm',
          exports: 'named',
          globals: {
            vue: 'Vue'
          },
        },
        {
          dir: 'dist',
          format: 'umd',
          exports: 'named',
           globals: {
            vue: 'Vue'
          },
        }      
      ]
    }
  }
})
