/** @type {import('tailwindcss').Config} */

const withOpacity = (variableName) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(${variableName}, ${opacityValue})`;
    }
    return `rgba(${variableName})`;
  };
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        light: "var(--light)",
        dark: "var(--background-primary)",
        muted: withOpacity("var(--muted)"),
      },
      backgroundColor: {
        ct: {
          primary: "var(--background-primary)",
          secondary: "var(--background-secondary)",
          muted: withOpacity("var(--background-muted)"),
        },
      },
      screens: {
        md: "799px",
      },
    },
  },
  plugins: [],
};
