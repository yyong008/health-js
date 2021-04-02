import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default {
    input: 'src/index.ts',
    output: [{
        file: 'lib/es/index.js',
        format: 'es'
    },
    {
        file: 'lib/amd/index.js',
        format: 'amd'
    },
    {
        file: 'lib/cjs/index.js',
        format: 'cjs'
    },
    // {
    //     file: 'iife/index.js',
    //     format: 'iife'
    // },
    {
        file: 'umd/index.js',
        format: 'umd',
        name: 'index.js'
    },
    {
        file: 'lib/system/index.js',
        format: 'system'
    },
    // {
    //     file: 'src/index.d.ts',
    //     output: [{ file: "es/types.d.ts", format: "es" }],
    //     name: 'index.js'
    // },
],
    plugins: [
        typescript(),
        // dts()
    ]
}