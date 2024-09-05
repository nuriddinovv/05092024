/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "968px",
        xl: "1200px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
