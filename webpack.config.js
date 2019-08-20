const path = require('path'),
	UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
	CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: path.normalize(`${__dirname}/index.jsx`),
	output: {
		path: path.normalize(`${__dirname}/dist`),
		filename: 'index.min.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/react', '@babel/env']
					}
				}
			},
			{
				test: /\.(jpg|png|jpeg|ico|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name]_[hash].[ext]',
							outputPath: 'images/',
							publicPath: 'images/'
						}
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['./dist'], { allowExternal: true }),
	],
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true,
				uglifyOptions: {
					ecma: 6,
				}
			}),
		]
	}
};
