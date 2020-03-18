import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import { terser } from "rollup-plugin-terser";

export default {
    input: './src/index.js',
    external: [ 'ramda' ],
    output: [
      {
          format: 'cjs',
          file: './dist/fps-cjs.js',
          name: 'fps',
      },
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**',
        }),
        resolve(),
        commonjs(),
        /* terser(), */
        filesize(),
    ]
}
