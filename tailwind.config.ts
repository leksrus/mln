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
        'slide1': "url('../../public/sliders/slide1.jpg')",
        'slide2': "url('../../public/sliders/slide2.jpg')",
        'slide3': "url('../../public/sliders/slide3.jpg')",
        'slide4': "url('../../public/sliders/slide4.jpg')",
        'slide5': "url('../../public/sliders/slide5.jpg')",
        'slide6': "url('../../public/sliders/slide6.jpg')",
        'slide7': "url('../../public/sliders/slide7.jpg')",
        'slide8': "url('../../public/sliders/slide8.jpg')",
      },
      backgroundColor: ({ theme }) => ({
        ...theme('colors'),
        'principal': '#F97316',
        'secondary': '#65A30D',
        'tertiary': '#61AEC9',
      }),
      textColor: {
        'principal': '#F97316',
        'secondary': '#65A30D',
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
