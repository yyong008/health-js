import typescript from '@rollup/plugin-typescript';


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
    // {
    //     file: 'umd/index.js',
    //     format: 'umd'
    // },
    {
        file: 'lib/system/index.js',
        format: 'system'
    }
],
    plugins: [
        typescript()
    ]
}