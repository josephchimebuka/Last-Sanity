import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        border: "#dee2e6", // Define the `border` color here
        ring: "#646cff",   // Define the `ring` color if needed
        background: "#242424", // Define the `background` color
        foreground: "#ffffff", // Define the `foreground` color
        "muted-foreground": "#6b7280",
      },
    },
  }, screens:{
    xs: '480px',
    ss: '620px',
    sm: '768px',
    md: '1060px',
    lg: '1200px',
    xl: '1700px'
  },
  plugins: [ require('daisyui')],
};
export default config;
