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

const customTheme = {
	container: {
		// screens: {
		// 	DEFAULT: '90%',
		// },
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
    plugin(globalStyle)
  ],
})
