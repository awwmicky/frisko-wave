/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const withMT = require('@material-tailwind/react/utils/withMT')
const { tw } = require('./config')

module.exports = withMT({
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './containers/**/*.{js,jsx,ts,tsx}',
  ],
  theme: tw.customTheme,
  plugins: [
		require('tailwindcss-textshadow'),
    plugin(tw.globalStyle),
		plugin(tw.webAccessoryStyle),
		plugin(tw.testStyle),
  ],
})
