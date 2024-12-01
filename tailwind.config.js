/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": '"Space Grotesk"',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["synthwave", "coffee"],
  },
};
