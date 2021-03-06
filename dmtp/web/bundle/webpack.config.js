'use strict'
const path = require('path')

const devMode = process.env.NODE_ENV !== 'production'

const BASE = path.resolve(__dirname)
const SOURCE = path.resolve(BASE, 'src')
const DEST = path.resolve(BASE, 'build', 'dmtp')

module.exports = {
  mode: devMode ? 'development' : 'production',
  target: 'web',
  context: path.resolve(__dirname),
  entry: path.resolve(SOURCE, 'index.ts'),

  devtool: devMode ? 'source-map' : false,
  watch: devMode,

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  externals: {
    bootstrap: 'bootstrap',
    d3: 'd3',
    lodash: '_',
    date_fns: 'date-fns',
  },

  plugins: [],

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  optimization: {
    usedExports: true,
  },

  output: {
    path: DEST,
    filename: `index.js`,
    chunkFilename: `index.chunk.js`,
    clean: true,
  },
}
