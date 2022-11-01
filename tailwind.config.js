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
        navy: {
          800: "#29648A",
          900: "#25274D",
        },
        fire: {
          800: "#2E9CCA",
          900: "#464866",
        },
        alGray: {
          900: "AAABBB",
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
