/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#040711",
        veryDarkGray: "#121826cc",
        darkGray: "#212936cc",
        gray: "#394150",
        lightGray: "#4D5562",
        white: "#F9FAFB",
        smokeWhite: "#CDD5E0",
        blue: "#3662E3",
        lightBlue: "#7CA9F3",
      },
    },
  },
  plugins: [],
};
