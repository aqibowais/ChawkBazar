/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Gillroy', 'sans-serif'],
      },
      fonts: {
        gillroy: ['Gillroy-Regular.woff2', 'Gillroy-Medium.woff2', 'Gillroy-Bold.woff2'],
      },
    },
  },
  plugins: [],
}

// Add the following line to the top of your CSS file
// @font-face {
//   font-family: 'Gillroy';
//   src: url('/assets/fonts/Gillroy-Regular.woff2') format('woff2');
//   font-weight: 400;
//   font-style: normal;
// }
//
// @font-face {
//   font-family: 'Gillroy';
//   src: url('/assets/fonts/Gillroy-Medium.woff2') format('woff2');
//   font-weight: 500;
//   font-style: normal;
// }
//
// @font-face {
//   font-family: 'Gillroy';
//   src: url('/assets/fonts/Gillroy-Bold.woff2') format('woff2');
//   font-weight: 700;
//   font-style: normal;
// }

