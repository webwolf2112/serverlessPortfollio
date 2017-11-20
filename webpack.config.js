const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const styleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
		entry: './js/main.js',
		output: {
		path: __dirname,
		filename: 'dist/bundle.js'
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
        test:/\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')

    },  {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        })
      }]
	},
	plugins: [
			new ExtractTextPlugin('dist/app.css')
    ]
}
