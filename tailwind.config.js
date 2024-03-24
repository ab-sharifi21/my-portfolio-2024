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
        bgImage: "url('./src/assets/bg-image.png')",
      },
    },
  },
  plugins: [],
};
