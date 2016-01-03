
module.exports = {
  entry: [
    './index.tsx'
  ],
  output: {
    path: 'built',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.tsx', '.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};
