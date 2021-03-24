import typescript from '@rollup/plugin-typescript';


export default {
    input: 'index.ts',
    output: {
        file: 'esm/index.js',
        format: 'esm'
    },
    plugins: [
        typescript()
    ]
}