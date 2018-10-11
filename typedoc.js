module.exports = {
	out: './docs',

	readme: 'none',
	includes: './src',
	exclude: ['**/__tests__/**/*', '**/__coverage__/**/*', '**/node_modules/**/*'],

	mode: 'file',
	excludeExternals: true,
	excludeNotExported: false,
	excludePrivate: false,
	module: 'umd',
	target: 'ES6',
	includeDeclarations: true
};
