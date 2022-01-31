const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      black: "#1A1A1A",
    },
    extend: {
      height: {
        3.75: "3.75rem",
      },
      width: {
        8.75: "8.75rem",
      },
      colors: {
        primary: "#112E66",
        "primary-light": "#F1F6FF",
        "primary-hovered": "#0E3B93",
        secondary: "#FFB800",
        error: "#E9003B",
        slate: "#CCCCCC",
        "slate-dark": "#AAAAAA",
      },
      fontSize: {
        "3.5xl": "3.5rem",
        lg: ["1.125rem", "1.33"],
      },
      borderWidth: {
        3: "3px",
      },
      fontFamily: {
        tinos: "Tinos",
        leiko: "Leiko",
        roboto: "Roboto",
      },
      spacing: {
        34: "8.5rem",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
