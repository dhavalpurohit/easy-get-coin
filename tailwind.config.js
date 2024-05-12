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
        darkPurple: '#3B2545',
        platinumGray: '#DADADA',
        fandango: '#A12F80',
        veronicaLight: '#9334FE',
        periwinkle: '#D6C5F1',
        electricPurple: '#BD34FE',
        mauve: '#E8B8FF',
        russian_violet: '#130635',
        electric_purple: '#AC3CF3',
      },
      boxShadow: {
        'default': '12px 0px 19.8px rgba(0, 0, 0, 0.6)',
        "lightBlack": '-1px 4px 14.1px rgba(0, 0, 0, 0.5)',
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
