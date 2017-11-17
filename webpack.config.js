const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './js/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['react']
				}
			}
		},{
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
    }]
	},
	plugins: [
        new ExtractTextPlugin('dist/style.css', {
            allChunks: true
        })
    ]
}
