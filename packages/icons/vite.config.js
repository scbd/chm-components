import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import minified from "./minified-build.js";
import unminified from "./unminified-build.js";


// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (mode === 'minified') {
    return {
    plugins: [vue()],
       build: minified
      
    }
  } else if(mode === 'unminified') {
 return {
    plugins: [vue()],
       build: unminified
      
    }
  } else {
    return {
      plugins: [vue()],
      build: {
      lib: {
         entry:  'src/index.js',
      name: 'CHM-icons',
      fileName: (format) => `index.${format}.js`
      },
      rollupOptions: {
       
        }
      }
    }
  }
})
