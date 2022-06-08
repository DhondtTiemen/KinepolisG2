module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      proxima: ['proxima-nova', 'sans-serif'],
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',

      'gray-x-dark': '#6E7474',
      gray: '#C9C9C9',
      'gray-x-light': '#EAEFF1',
      'gray-xx-light': '#e5e9ea',

      alpha: '#1B243F',
      'alpha-x': '#313a55',
      'alpha-x-light': '#004680',
      'alpha-xx-light': '#00AAD7',
      'alpha-xxx-light': '#5d7b94',

      error: '#FF4F2E',
      warning: '#FAB233',
      good: '#38E05E',

      transparant: 'rgba(0,0,0,0)',
    },
    extend: {
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      backgroundImage: {
        bg: "url('https://images.unsplash.com/photo-1579547621244-c07e55dcb856?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=639&q=80')",
        'bg-light':
          "url('https://images.unsplash.com/photo-1556139943-4bdca53adf1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
