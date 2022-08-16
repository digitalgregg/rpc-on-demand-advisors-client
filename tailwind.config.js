/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E51937",
        secondary: "#191919",
        white: "#F8F8F8"
      },
      fontFamily: {
        primary: ["Open Sans", "sans-serif"],
    },
    },
    container: {
      padding: {
        xs: "20px",
        sm: "40px",
        md: "50px",
        lg: "47px",
        xl: "60px",
        "2xl": "120px",
        "3xl": "120px",
        "4xl": "180px"
      }
    },
    screens: {
      xs: "375px",
      sm: "680px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
      "3xl": "1680px",
      "4xl": "1920px",
    },
  }
}
