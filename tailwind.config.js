/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        primary: {
          replyBlue: {
            600: "#d2e6e4",
            900: "#d2e6e4",
          },
        },
        secondary: {
          replyOrange: {
            900: "#fd661f",
          },
          replyRed: {
            900: "#df1c25",
          },
          replyGreen: {
            900: "#0b7077",
          },
          textColor: {
            900: "#4D4D4D",
          },
        },
      },
    },
  },
  plugins: [],
};
