import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "font-color": "#272727"
      },
      backgroundImage: {
        "mobile": "url(/pattern-bg-mobile.png)",
        "desktop": "url(/pattern-bg-desktop.png)"
      }
    },
  },
  plugins: [],
};
export default config;
