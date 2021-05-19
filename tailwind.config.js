module.exports = {
  purge: ['./src/**/*.{jx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        layout: '5rem minmax(0 ,1fr) 5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
