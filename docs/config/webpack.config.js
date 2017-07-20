const path = require('path')
const webpack = require('webpack')

const dev = process.env.NODE_ENV !== 'production'

function getEntrySources(sources) {
  if (dev) {
    sources.push('webpack-dev-server/client?http://localhost:3000')
    sources.push('webpack/hot/only-dev-server')
  }
  return sources
}

function getLoaders(loaders) {
  if (dev) {
    loaders.push('react-hot-loader')
  }
  loaders.push('babel-loader')
  return loaders
}

function getPlugins(plugins) {
  if (dev) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }
  return plugins
}

module.exports = {
  devtool: dev ? 'eval' : '',
  entry: {
    examples: getEntrySources(['./src/index.jsx']),
  },
  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'bundle.js',
    publicPath: '/build',
  },
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  plugins: getPlugins([]),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: getLoaders([]),
        include: [path.join(__dirname, '..', 'src')],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|gif|jpg|html)$/,
        use: ['file-loader'],
      },
    ],
  },
}
