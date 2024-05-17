/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tablet: '576px',
      laptop: '900px',
    },
    extend: {
      colors: {
        bgColor: '#1f1f38',
        primaryColor: '#4db5ff',
        fontColor: '#fff',
        lightColor: 'rgba(255, 255, 255, 0.6)',
        skillBoxColor: '#436D7B',
      },
      backgroundImage: {
        bgImage: "url('./src/assets/bgImage.png')",
      },
      boxShadow: {
        boxShadow: '0px 8px 8px 8px rgba(0, 0, 0, 0.5)',
        'box-shadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25);'
      },
    },
  },
  plugins: [],
};
