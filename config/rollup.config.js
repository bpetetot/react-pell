import fs from 'fs'
import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'

const pkg = JSON.parse(fs.readFileSync('./package.json'))
const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]

export default {
  entry: pkg['jsnext:main'] || 'src/index.js',
  dest: pkg.main,
  sourceMap: false,
  moduleName: pkg.amdName || pkg.name,
  format: process.env.FORMAT || 'umd',
  external,
  globals: {
    react: 'React',
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
  ],
}
