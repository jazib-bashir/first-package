import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from "@rollup/plugin-typescript";
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image'
// import visualizer from 'rollup-plugin-visualizer';

const pkg = require("./package.json");

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'esm'
    }
  ],
  plugins: [
    external(),
    postcss(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    image(),
    typescript({ tsconfig: "./tsconfig.json" }),
    // visualizer()
  ]
};
