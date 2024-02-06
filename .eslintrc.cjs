/** @type { import('eslint').Linter.Config } */
module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'plugin:@lint-md/recommend',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		},
		{
			files: ['*.md'],
			parser: '@lint-md/eslint-plugin/lib/parser',
			rules: {
				'@lint-md/no-long-code': [
					2,
					{
						length: 100,
						exclude: []
					}
				],
				'@lint-md/no-trailing-punctuation': 0
			}
		}
	]
};
