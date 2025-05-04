/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  darkMode: "data-theme",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fill: (theme) => theme("color"),
      colors: {
        light: {
          text: {
            DEFAULT: "#212529",
            1: "#CED4DA",
            2: "#868E96",
            3: "#495057",
          },
        },
        dark: {
          text: {
            DEFAULT: "#ECECEC",
            1: "#D9D9D9",
            2: "#ACACAC",
            3: "#595959",
          },
        },
        transparent: "transparent",
      },
      fontFamily: {
        sans: ["Pretendard", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
