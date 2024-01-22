import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'slide1': "url('/sliders/slide1.jpg')",
        'slide2': "url('/sliders/slide2.jpg')",
        'slide3': "url('/sliders/slide3.jpg')",
        'slide4': "url('/sliders/slide4.jpg')",
        'slide5': "url('/sliders/slide5.jpg')",
        'slide6': "url('/sliders/slide6.jpg')",
        'slide7': "url('/sliders/slide7.jpg')",
        'slide8': "url('/sliders/slide8.jpg')",
      },
      backgroundColor: ({ theme }) => ({
        ...theme('colors'),
        'principal': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
      }),
      textColor: {
        'principal': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },

    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    extend: {
    },
    plugins: [
      require('flowbite/plugin'),
    ],
  }
}
export default config
