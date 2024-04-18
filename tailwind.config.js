export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        platinum: '#E0E0E0',
        darkGray: 'rgba(250, 226, 255, 0.1)',
        veronica: '#9036EF',
        jet: '#2E2E2E',
      },
      boxShadow: {
        'default': '12px 0px 19.8px rgba(0, 0, 0, 0.6)',
      },
      fontSize: {
        '35': '2.188rem'
      },
      borderRadius: {
        30: '1.875rem'
      },
      spacing: {
        '510': '31.875rem',
      }
    }
  },
  plugins: []
}

