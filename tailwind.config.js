module.exports = {
  future: {
    removeDeprecatedGapUtilities: true, //used to enable/disable advanced features
  },
  theme: {
    fill: (theme) => ({
      red: theme("colors.red.primary"),
    }),
    color: {
      white: "#ffffff",
      blue: {
        medium: "#005c98",
      },
      black: {
        light: "#005c98",
        faded: "#00000059",
      },
      gray: {
        base: "#616161",
        background: "#fafafa",
        primary: "#dbdbdb",
      },
      red: {
        primary: "#ed4956",
      },
    },
    extend: {}, // used to customize the available styles
  },
  variants: {}, //used to customize the generated variants
  plugins: [], //array is used to enable/disable plugins
  content: ["./src/**/*.html", "./src/**/*.js", "./public/index.html"], //array is used to enable the purge process.
};
