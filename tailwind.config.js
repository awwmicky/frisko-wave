/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const withMT = require('@material-tailwind/react/utils/withMT')

const globalStyle = ({ addBase }) => {
	addBase({
		'html, body, #__next': {
			height: '100%',
		},
		'#__next': {
			display: 'flex',
			'flexDirection': 'column',
		},
		'main': {
			flex: '1 1 auto',
		},
	})
}

const testStyle = ({ addComponents }) => {
	addComponents({
		'.s1, .s2, .s2 > *, .s3, .s3 *': { 'boxShadow': 'inset 0 0 5px silver' },
		'.t1, .t2, .t2 > *, .t3, .t3 *': { 'transition': '0.3s linear' },
	})
}

const customTheme = {
	container: {
		padding: {
			DEFAULT: '1.25em',
			'2xl': '0',
		},
	},
}

module.exports = withMT({
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
		...customTheme,
    extend: {},
  },
  plugins: [
    plugin(globalStyle),
		plugin(testStyle),
  ],
})
