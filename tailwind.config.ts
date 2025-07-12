import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-archivo)', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "bg-primary": "#FFFFFF",
        "bg-secondary": "#EEEEEE",
        "bg-tertiary": "#404040",
        "primary": "#3B3B3B",
        "secondary": "#737373",
        "stroke-primary": "#3B3B3B",
        "stroke-secondary": "#8F8F8F",
        "stroke-tertiary": "#EFEDF3",
        "cta-primary": "#585660"
      }
    },
  },
  plugins: [],
};
export default config;
