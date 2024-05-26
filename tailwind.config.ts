import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#222222",
      },
      fontSize: {
        "5xl": ["50px", "53px"],
        "6xl": ["56px", "65px"],
        "8xl": ["81px", "85px"],
      },
    },
  },
  plugins: [],
};
export default config;
