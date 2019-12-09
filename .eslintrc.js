module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
		jest: true,
		mocha: true,
	},
	globals: {
		React: false,
		shallow: false,
		store: false,
		workbox: false,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parserOptions: {
		ecmaVersion: 8,
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		indent: ['error', 2, { SwitchCase: 1 }],
		'linebreak-style': ['error', 'windows'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-console': 'off',
		'no-unused-vars': ['error', { args: 'none' }]
	}
};
