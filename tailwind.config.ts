// module.exports = {
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }


// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;

