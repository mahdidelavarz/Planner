const { heroui } = require("@heroui/theme");
import { fontFamily } from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["vazir", ...fontFamily.sans],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: {
          950: withOpacity("#22222e"),
          900: withOpacity("#343446"),
          800: withOpacity("#3a3c52"),
          700: withOpacity("#434461"),
          600: withOpacity("#525477"),
          500: withOpacity("#676a90"),
          400: withOpacity("#8689aa"),
          300: withOpacity("#b1b3c8"),
          200: withOpacity("#d5d5e2"),
          100: withOpacity("#ececf2"),
          50: withOpacity("#f6f6f9"),
        },
        secondary: {
          900: withOpacity("#393a5a"),
          800: withOpacity("#4d4d80"),
          700: withOpacity("#5a5c9b"),
          600: withOpacity("#656bab"),
          500: withOpacity("#7882b9"),
          400: withOpacity("#929ec8"),
          300: withOpacity("#b5bedb"),
          200: withOpacity("#d3d8ea"),
          100: withOpacity("#e6e9f3"),
          50: withOpacity("#f4f6fa"),
          0: withOpacity("#fff"),
        },
        third: {
          900: withOpacity("#4f5060"),
          800: withOpacity("#5e5d76"),
          700: withOpacity("#706f8e"),
          600: withOpacity("#8685a6"),
          500: withOpacity("#9b9db9"),
          400: withOpacity("#b0b3c9"),
          300: withOpacity("#c7cbda"),
          200: withOpacity("#dddfe8"),
          100: withOpacity("#eceef3"),
          50: withOpacity("#f5f6f8"),
        },
        accent: {
          950: withOpacity("#421525"),
          900: withOpacity("#6f2c44"),
          800: withOpacity("#84304e"),
          700: withOpacity("#9f375e"),
          600: withOpacity("#b94976"),
          500: withOpacity("#cd6795"),
          400: withOpacity("#dc8ab1"),
          300: withOpacity("#eab8d1"),
          200: withOpacity("#f3d7e6"),
          100: withOpacity("#f8ebf1"),
          50: withOpacity("#fbf4f8"),
        },
        background: {
          900: withOpacity("#22222e"),
        },
        bordering: {
          200: withOpacity("#5c5d6d"),
        },
      },
    },
  },
  plugins: [heroui()],
}
function withOpacity(variableName) {
  return `${variableName}`;
}
