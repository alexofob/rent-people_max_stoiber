const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]',
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.scss', '.css'],
  },
};
