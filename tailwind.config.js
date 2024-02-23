/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          replyBlue: {
            600: "#4A6572",
            700: "#344955",
            800: "#232F34",

          },

        },
        secondary: {
          replyOrange: {
            900 : "#F9AA33",
          },
        },
      },
    },
  },
  plugins: [],
};
