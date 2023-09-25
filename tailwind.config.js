/** @type {import('tailwindcss').Config} */
// Import defaults - trim when done with styling
const colors = require("tailwindcss/colors");

//https://realtimecolors.com/palettes/?colors=000000-ffffff-8fb3ff-ebf1ff-d41d6d
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        light: "#4d5e6e",
        DEFAULT: "#363155",
        dark: "#393d57",
      },
      pink: "#3c2941",
      purple: {
        DEFAULT: "#e657ff",
        dark: "#55406c"
      },
      topography: colors.white,
      black: colors.black,
      gray: {
        DEFAULT: "#262417",
      },
      zinc: {
        DEFAULT: "#3f3f46",
        dark: "#27272a"
      },
      white: colors.white,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: colors.slate,
    },
    extend: {},
  },
  plugins: [],
};