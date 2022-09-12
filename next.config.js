/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')({
	dest: 'public',
	disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
	reactStrictMode: true,
	compiler: {
		emotion: true,
	},
});
