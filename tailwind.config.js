/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paleGray: {
          900: "#363636",
          800: "#474747",
          100: "#A8A7A7",
        },
        shinyRed: {
          500: "#E8175D",
        },
        paleRed: {
          700: "#CC527A",
        },
      },
      extend: {},
      fontFamily: {
        Inconsolata: ["Inconsolata"],
      },
    },
  },
  plugins: [],
};
