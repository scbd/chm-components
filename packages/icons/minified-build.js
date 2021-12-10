export default data = {
    lib: {
          entry:  'src/index.js',
          name: 'CHM-icons',
          fileName: (format) => `index.${format}.js`
        },
          rollupOptions: {
           external: ['vue'],
            input: 'src/index.js',
            output: [
              {
                dir: 'dist_unminified',
                format: 'cjs',
                exports: 'named',
                globals: {
                  vue: 'Vue'
                },
              },
              {
                dir: 'dist_unminified',
                format: 'esm',
                exports: 'named',
                globals: {
                  vue: 'Vue'
                },
              },
              {
                dir: 'dist_unminified',
                format: 'umd',
                exports: 'named',
                globals: {
                  vue: 'Vue'
                },
              }      
            ]
          }
        }