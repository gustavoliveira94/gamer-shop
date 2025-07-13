import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/presentation/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-archivo)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        primary: '#FFFFFF',
        secondary: '#EEEEEE',
        tertiary: '#404040',
      },
      colors: {
        primary: '#3B3B3B',
        secondary: '#737373',
        'cta-primary': '#585660',
      },
      borderColor: {
        primary: '#3B3B3B',
        secondary: '#8F8F8F',
        tertiary: '#EFEDF3',
      },
    },
  },
  plugins: [],
}
export default config
