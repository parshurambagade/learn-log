/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./index.ts", "./**/*.ts", "./**/*.tsx"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
