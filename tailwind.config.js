module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      proxima: ['Proxima Nova'],
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',

      'gray-x-dark': '#6E7474',
      gray: '#C9C9C9',
      'gray-x-light': '#F1F5F6',
      'gray-xx-light':'#e5e9ea',

      alpha: '#1B243F',
      'alpha-x-light': '#004680',
      'alpha-xx-light': '#00AAD7',

      error: '#FF4F2E',
      warning: '#FAB233',
      good: '#38E05E',

      transparant: 'rgba(0,0,0,0)',
    },
    extend: {},
  },
  plugins: [],
}
