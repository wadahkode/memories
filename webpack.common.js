const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        memories: './src/index.js'
    },
    plugins: [
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        new CleanWebpackPlugin(),
    ],
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist/js'),
    },
    performance: {
        hints: 'warning',
        //maxEntrypointSize: 4 * 1024 * 1024,
        //maxAssetSize: 10 * 1024 * 1024
    }
};