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
                White: "#FFFFFF",
                white_primary: "#FAFAFA",
                white_secondary: "#F8F8F8",
                black_primary: "#1D1D1D",
                black_secondary: "#191919",
                gray: "#4F4F4F",
                info: "#2FB0ED",
                success: "#27AE60",
                warning: "#E26936",
                error: "#EB5757",
            },
            fontFamily: {
                primary: ["Open Sans", "sans-serif"],
            },
        },
        container: {
            center: true,
            padding: {
                xs: "20px",
                sm: "40px",
                md: "50px",
                lg: "47px",
                xl: "60px",
                "2xl": "120px",
                "3xl": "120px",
                "4xl": "180px",
            },
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
            "max-xs": { max: "374px" },
            "max-sm": { max: "679px" },
            "max-md": { max: "767px" },
            "max-lg": { max: "1023px" },
            "max-xl": { max: "1199px" },
            "max-2xl": { max: "1439px" },
            "max-3xl": { max: "1679px" },
            "max-4xl": { max: "1919px" },
        },
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                ".dashboard-container": {
                    padding: "0 20px",
                    "@screen sm": {
                        padding: "0 25px",
                    },
                    "@screen lg": {
                        padding: "0 35px",
                    },
                },
            });
        },
        function ({ addVariant }) {
            addVariant("child", "& > *");
            addVariant("child-hover", "& > *:hover");
        },
    ],
};
