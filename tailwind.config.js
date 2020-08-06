module.exports = {
	theme: {
		extend: {
			spacing: {
				 '750': '46.88rem',
			}
		}
	},
	variants: {},
	plugins: [],
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'./public/**/*.html',
			'./src/**/*.vue'
		]
	}
}
