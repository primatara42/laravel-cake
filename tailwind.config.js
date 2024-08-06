/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EF5A6F",
        secondary: "#632626",
        
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "800px" },
        sm: { max: "639px" },
        "-md": { min: "800px" },
        "-sm": { min: "639px" },
      },
    },
  },
  plugins: [],
};
