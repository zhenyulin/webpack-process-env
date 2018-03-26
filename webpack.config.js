const webpack = require('webpack');
const path = require('path');

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	target: 'node',
	entry: './src/index',
	output: {
		libraryTarget: 'umd',
		path: path.resolve('./dist'),
		filename: 'index.js',
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'env',
								{
									modules: false,
									targets: { node: '6.10' },
								},
							],
						],
					},
				},
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
				// ENV_VAR_FOO: JSON.stringify('bar'),
			},
		}),
	],
};
