const path = require(`path`)

module.exports = {
	entry: {
		"modules-bundle": [`./node_modules/@babel/polyfill/dist/polyfill.min.js`, `./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js`, `./node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js`],
		"main-bundle": [`./src/main.js`],
	},
	output: {
		path: path.resolve(__dirname, `./`),
		filename: `[name].js`,
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)\/(?!(lit-html))/,
				use: {
					loader: `babel-loader`,
					options: {
						presets: [`@babel/preset-env`],
					},
				},
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [`eslint-loader`],
			},
			{
				test: /\.css$/,
				use: [`style-loader`, `css-loader`, `postcss-loader`],
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/,
				loader: `file-loader`,
				options: {
					publicPath: `/src/`,
					name: `[name].[ext]?[hash]`,
				},
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/,
				loader: `url-loader`,
				options: {
					publicPath: `/src/`,
					name: `[name].[ext]?[hash]`,
					limit: 10000,
				},
			},
		],
	},	
	devServer: {
		hot : true,
		contentBase: path.join(__dirname, `/`),
		watchContentBase: true,
		historyApiFallback: true,
		compress: true,
		host: `0.0.0.0`,
		disableHostCheck: true,
		port: 9000,
	},
	devtool: `inline-source-map`,
}
