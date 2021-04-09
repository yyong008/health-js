import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'lib/es/index.js',
        format: 'es',
      },
      {
        file: 'lib/amd/index.js',
        format: 'amd',
      },
      {
        file: 'lib/cjs/index.js',
        format: 'cjs',
      },
      {
          file: 'lib/iife/index.js',
          format: 'iife',
          name: 'index.js'
      },
      {
        file: 'lib/umd/index.js',
        format: 'umd',
        name: 'index.js',
      },
      {
        file: 'lib/system/index.js',
        format: 'system',
      },
      // {
      //     file: 'src/types.d.ts',
      //     output: [{ file: "lib/es/types/typings.d.ts", format: "es" }],
      //     plugins: [
      //         dts()
      //     ]
      // },
    ],
    plugins: [typescript()],
  },
  {
    input: './src/types.d.ts',
    output: [{ file: './lib/es/types.d.ts', format: 'es' }],
    plugins: [dts()],
  },
]

