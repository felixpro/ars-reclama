/* eslint-disable */
const purgecss = require('@fullhuman/postcss-purgecss');
const plugins = [require('tailwindcss')('./tailwind.config.js'), require('autoprefixer')];

if (process.env.NODE_ENV === 'production') {
	plugins.push(
		purgecss({
			content: ['./src/**/*.tsx'],
			defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
		})
	);
}

module.exports = {
	plugins,
};
