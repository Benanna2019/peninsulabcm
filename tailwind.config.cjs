const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tyrianPurple: {
          50: "#8c6474",
          100: "#815566",
          200: "#744457",
          300: "#663146",
          400: "#571C33",
          500: "#4F192E",
          600: "#48172A",
          700: "#411526",
          800: "#3b1323",
          900: "#361120",
        },
        "warm-gray": colors.stone,
        teal: colors.teal,
        white: "#fff",
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        gray: colors.neutral,
        "gray-150": "#EEEFF2",
        "gray-1000": "#050505",
        black: "#050505",
        "design-details": "#458886",
        "design-details-light": "#EEF3F3",
        "design-details-dark": "#273F3F",
        "hacker-news": "#FF965A",
        twitter: "#479BEA",
        current: "currentColor",
      },
      boxShadow: {
        xs: "0 1px 2px 0px rgba(0,0,0,0.03)",
        subtle: "0 4px 32px rgba(0,0,0,0.03)",
        cardHover:
          "0 4px 4.1px rgba(0, 0, 0, 0.012),0 4.9px 5.8px rgba(0, 0, 0, 0.018),0 6.3px 8.4px rgba(0, 0, 0, 0.029),0 8.8px 12.9px rgba(0, 0, 0, 0.05),0 15px 23px rgba(0, 0, 0, 0.11)",
      },
      animation: {
        modalEnter: "modal-enter 200ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "modal-enter": {
          "0%": { opacity: 0, transform: "translate(-50%, -50%) scale(.96)" },
          "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};
