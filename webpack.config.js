const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const styleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
		entry: './app.js',
		output: {
		path: __dirname,
		filename: 'dist/bundle.js'
	},
	devtool: 'inline-source-map',
	devServer: {
    	contentBase: "./",
    	watchContentBase: true,
    	hot: true,
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
		},
       {
        test: /\.scss$/,
    	use: [
    		"style-loader",
    		"css-loader",
    		"postcss-loader",
    		"sass-loader",
    
    	]
      }]
	},
	plugins: [
		// new ExtractTextPlugin('dist/app.css'),

		new webpack.HotModuleReplacementPlugin()
    ]
}
