const defaultTheme = require('tailwindcss/defaultTheme')

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

const webAccessoryStyle = ({ addBase }) => {
	const rootColor = {
		primary: '#EF4444',
		secondary: '#F87171',
		white: '#FFFFFF',
	}

	addBase({
		'::selection': {
			'backgroundColor': rootColor.primary,
			'color': rootColor.white,
		},

		'::-webkit-resizer': {
			'backgroundColor': 'transparent',
		},
		'::-webkit-scrollbar': {
			// 'backgroundColor': 'transparent',
			'width': '0.75rem',
		},
		'::-webkit-scrollbar-corner': {
			'backgroundColor': 'transparent',
		},
		'::-webkit-scrollbar-thumb': {
			'border': '3.5px solid transparent',
			'border-radius': '1.5em',
			'backgroundColor': rootColor.secondary,
			// 'background-clip': 'content-box',
		},
		'::-webkit-scrollbar-thumb:hover': {
			'backgroundColor': rootColor.primary,
			// 'background-clip': 'content-box',
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
	...defaultTheme,
	container: {
		padding: {
			DEFAULT: '1.25em',
			'2xl': '0',
		},
	},
	extend: {
		fontSize: {
			'9xl': [
				'6rem',
				{ lineHeight: '1' }
			]
		},
	},
}

module.exports = {
	globalStyle,
	webAccessoryStyle,
	testStyle,
	customTheme,
}
