import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: 'url("/assets/hero.webp")',
        "gradient-overlay":
        "linear-gradient(to bottom, rgba(244, 114, 182, 0.5), rgba(0, 0, 0, 0.8))",
      },
    },
  },
  plugins: [],
};
export default config;
