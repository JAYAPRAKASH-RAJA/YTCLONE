/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx.ts,tsx}"],
  darkMode: 'false',
  theme: {
    extend: {inset: {
      '5': '5px',
      '10': '10px',
      '25': '25px',
    },
    colors: {
      'custom-light-blue': 'rgb(232, 231, 255)',
    },
    screens: {
      '2xl': '1440px',
    },
      gridTemplateColumns: {
        '4': 'repeat(4, minmax(0, 1fr))',
        '5': 'repeat(5, minmax(0, 1fr))',
        
      },
      margin: {
        'custom-10': '10px',
        'custom-0': '0px',
        'custom-15': '15px',
        'custom-30': '30px',
        'custom-35': '35px',
        'custom-40': '40px',
        'custom-45': '45px',
        'custom-50': '50px',
        'custom-150': '150px',
        'custom-190': '190px',
        'custom-250': '250px',
        'custom-300': '300px',
        'custom-350': '350px',
        'custom-20': '20px',
        'custom-400': '400px',
        'custom-600': '600px',
        'custom-680': '680px',
        'custom-700': '700px',
        'custom-800': '800px',
        'custom-25': '25px',
      },
      width: {
        'custom-200': '200px',
        'custom-300': '300px',
        'custom-400': '400px',
        'custom-500': '500px',
        'custom-600': '600px',
        'custom-700': '700px',
        'custom-800': '800px',
        'custom-900': '900px',
        'custom-1000': '1000px',
      },
      height: {
        'custom-200': '200px',
        'custom-300': '300px',
        'custom-400': '400px',
        'custom-500': '500px',
        'custom-600': '600px',
        'custom-800': '800px',
        'custom-900': '900px',
        'custom-850': '850px',
        'custom-1000': '1000px',
        'custom-1100': '1100px',
        'custom-1150': '1150px',
        'custom-1200': '1200px',
      }
    },
  },
  plugins: [
            require("@tailwindcss/line-clamp"),
            require('@tailwindcss/aspect-ratio')
  ],
  variants: {
    extend: {},
  },
 
}


