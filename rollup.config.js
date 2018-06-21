import path from 'path';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { terser } from "rollup-plugin-terser";
import visualizer from 'rollup-plugin-visualizer';

var pkg = require('./package.json');
var externalDeps = Object.keys(
  Object.assign({}, pkg.dependencies, pkg.peerDependencies)
);
var nodeDeps = ['path'];
var external = externalDeps.concat(nodeDeps);

export default {
  input: './src/index.js',
  moduleName: 'govuk-react-components',
  sourcemap: true,

  targets: [
    {
      dest: 'dist/govuk-react-components.js',
      format: 'umd'
    },
    {
      dest: 'dist/govuk-react-components.module.js',
      format: 'es'
    }
  ],

  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      ENVIRONMENT: JSON.stringify('production')
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    terser({
      sourceMap: true
    }),
    resolve({
      extensions:['.js','.jsx']
    }),
    commonjs(),
    visualizer({ filename: './dist/bundle-stats.html' })
  ],

  external: ['react'].concat(external),

  globals: {
    react: 'React',
    'prop-types': 'PropTypes'
  }
};
