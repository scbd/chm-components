export default data = {
    lib: {
          entry:  'src/index.js',
          name: 'CHM-icons',
          fileName: (format) => `index.${format}.min.js`
        },
          rollupOptions: {
           external: ['vue'],
            input: 'src/index.js',
            output: [
              {
                dir: 'dist_minified',
                format: 'cjs',
                exports: 'named',
                globals: {
                  vue: 'Vue'
                },
              },
              {
                dir: 'dist_minified',
                format: 'esm',
                exports: 'named',
                globals: {
                  vue: 'Vue'
                },
              },
              {
                dir: 'dist_minified',
                format: 'umd',
                exports: 'named',
                globals: {
                  vue: 'Vue'
                },
              }      
            ]
          }
        }