const defaultTheme = require('tailwindcss/defaultTheme')

const globalStyle = ({ addBase }) => {
	addBase({
		'html, body': {
			height: '100%',
		},
		'#__next': {
			'minHeight': '100%',
			display: 'flex',
			'flexDirection': 'column',
		},
		'main': {
			flex: '1 1 auto',
		},
		/*  */
		'input[type=number],\
		input::-webkit-outer-spin-button,\
		input::-webkit-inner-spin-button': {
			'-moz-appearance': 'textfield',
			'-webkit-appearance': 'none',
			'margin': 0,
		},
		/*  */
		'input.border-t-transparent:focus': {
			'border-top-color': 'initial !important',
		},
		'input ~ label::before': {
			display: 'none !important',
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
		},
	},
	extend: { },
}

module.exports = {
	globalStyle,
	webAccessoryStyle,
	testStyle,
	customTheme,
}
