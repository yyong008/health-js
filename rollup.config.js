import typescript from '@rollup/plugin-typescript';

export default {
    input: './types/index.ts',
    output: {
        file: 'es/index.js',
        format: 'es'
    },
    plugins: [
        typescript()
    ]
}