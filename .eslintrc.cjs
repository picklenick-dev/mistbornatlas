module.exports = {
	root: true,
	env: {
		browser: true,
		es2020: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	ignorePatterns: ['dist', 'build', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'react-refresh'],
	overrides: [
		{
			// i18n data files are auto-generated and necessarily long — no line limit, allow any casts
			files: ['src/i18n/locales/*-data.ts', 'src/i18n/locales/*.ts'],
			rules: {
				'max-lines': 'off',
				'@typescript-eslint/no-explicit-any': 'off',
			},
		},
	],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

		// Allow underscore-prefixed parameters to signal intentionally unused args (e.g. _event, _container)
		'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],

		// Brace & spacing style
		'brace-style': ['error', '1tbs', { allowSingleLine: false }],
		'object-curly-spacing': ['error', 'always'],
		'space-before-blocks': 'error',
		'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
		'keyword-spacing': ['error', { before: true, after: true }],
		'space-infix-ops': 'error',

		// Max file length
		'max-lines': ['warn', { max: 300, skipBlankLines: true, skipComments: true }],
	},
};
