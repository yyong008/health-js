import typescript from '@rollup/plugin-typescript';
import scss from 'rollup-plugin-scss';
export default {
    input: 'index.ts',
    output: {
        file: 'esm/index.js',
        format: 'esm'
    },
    plugins: [
        scss(),
        typescript(),
    ]
}