import fs from 'fs'
import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import uglify from 'rollup-plugin-uglify'

const pkg = JSON.parse(fs.readFileSync('./package.json'))

export default {
  entry: pkg['jsnext:main'] || 'src/index.js',
  dest: pkg.main,
  sourceMap: false,
  moduleName: pkg.amdName || pkg.name,
  format: process.env.FORMAT || 'umd',
  external: [...Object.keys(pkg.peerDependencies)],
  globals: {
    react: 'React',
    'prop-types': 'PropTypes',
  },
  plugins: [
    nodeResolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    uglify({
      output: {
        comments: false,
      },
    }),
    postcss({
      extensions: ['.css'],
    }),
  ],
}
