/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addBase }) => {
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
    })
  ],
})