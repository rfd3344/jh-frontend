const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const entryConfig = {
	main: path.resolve(__dirname, '../src/index.js'),
	entry2: path.resolve(__dirname, '../src/entry2.js'),
};

const outputConfig = {
	path: path.resolve(__dirname, '../public/dist'),
	filename: '[name].bundle.js',
	publicPath: './dist',
};

const moduleConfig = {
	rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /(node_modules|bower_components)/,
			use: [
				{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-transform-runtime'],
					},
				},
				// close eslint check, reduce info generate in Terminal
				// { loader: 'eslint-loader' },
			],
		},
		{
			test: /\.less$/,
			use: [
				{ loader: 'style-loader' },
				{ loader: 'css-loader' },
				{ loader: 'less-loader' },
			],
		},
		{
			test: /\.(png|jpg|gif)$/,
			use: [{ loader: 'file-loader' }],
		},
	],
};

const resolveConfig = {
	alias: {
		// Define directory with alias name. usage:
		// import AxiosMethod from 'utilis/AxiosMethod';
		src: path.resolve(__dirname, '../src/'),
		utilis: path.resolve(__dirname, '../src/utilis'),
		helper: path.resolve(__dirname, '../src/helper'),
		assets: path.resolve(__dirname, '../src/assets'),

		tests: path.resolve(__dirname, '../tests'),
		testData: path.resolve(__dirname, '../tests/testData'),
		testHelper: path.resolve(__dirname, '../tests/testHelper'),
	},
};

const optimizationConfig = {
	runtimeChunk: true,
	splitChunks: {
		chunks: 'all',
	},
};

const performanceConfig = {
	hints: 'warning',
	maxEntrypointSize: 4000000,
	maxAssetSize: 4000000,
};

const pluginsConfig = [
	new webpack.NamedModulesPlugin(),
	new HtmlWebpackPlugin({
		template: './public/entry.html',
		filename: '../index.html',
		inject: 'body',
	}),
	// new webpack.EnvironmentPlugin({
	// 	// processed by JSON.stringify
	// 	testEnv: 'test enviroment plugin',
	// }),
];

module.exports = {
	mode: 'production',
	entry: entryConfig,
	output: outputConfig,
	module: moduleConfig,
	resolve: resolveConfig,
	optimization: optimizationConfig,
	performance: performanceConfig,
	plugins: pluginsConfig,
};
