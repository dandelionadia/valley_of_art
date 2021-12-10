module.exports = {
  purge: ["src/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        violet: {
          light: "#C4D1FE",
          dark: "#3C3CBE",
          DEFAULT: "#6465F1",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
