const defaultTheme = require('tailwindcss/defaultTheme')

const globalStyle = ({ addBase }) => {
	// minHeight: '-webkit-fill-available',
	addBase({
		'html, body': {
			height: '100%',
		},
		'#__next': {
			minHeight: '100%',
			display: 'flex',
			flexDirection: 'column',
		},
		'main': {
			flex: '1 1 auto',
		},
		/*  */
		'input ~ label::before': {
			display: 'none !important',
		},
		'input ~ label::after': {
			borderRadius: '0.375rem 0.375rem 0 0 !important',
			marginLeft: '0 !important',
		},
		'input[type=number],\
		input[type=number]::-webkit-outer-spin-button,\
		input[type=number]::-webkit-inner-spin-button': {
			'-moz-appearance': 'textfield',
			'-webkit-appearance': 'none',
			margin: 0,
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
		'::marker,\
		::selection': {
			backgroundColor: rootColor.primary,
			color: rootColor.white,
		},

		'::-webkit-resizer,\
		::-webkit-scrollbar-corner': {
			backgroundColor: 'transparent',
		},

		'::-webkit-scrollbar': {
			// backgroundColor: 'transparent',
			width: '0.75rem',
		},
		'::-webkit-scrollbar-thumb': {
			border: '0.15em solid transparent',
			borderRadius: '1.5em',
			backgroundColor: rootColor.secondary,
			// 'background-clip': 'content-box',
		},
		'::-webkit-scrollbar-thumb:hover': {
			backgroundColor: rootColor.primary + ' !important',
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
