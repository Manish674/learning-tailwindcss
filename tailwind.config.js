module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        "1/2": "50%",
      },
      maxWidth: {
        "1/2": "187.5px",
      },
      zIndex: {
        "2/1": "-1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
