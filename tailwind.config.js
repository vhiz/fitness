/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#001F3D",
        secondary: "#045174",
        accent: {
          DEFAULT: "#D89C60",
          hover: "#E87A00",
        },
      },
    },
  },
  plugins: [],
};
