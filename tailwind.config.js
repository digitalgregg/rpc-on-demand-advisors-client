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
                primary_dark: "#890F21",
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
        function ({ addUtilities }) {
            const newUtilities = {
                ".shape-auto": {
                    "shape-rendering": "auto",
                },
                ".shape-optimize-speed": {
                    "shape-rendering": "optimizeSpeed",
                },
                ".shape-crisp-edges": {
                    "shape-rendering": "crispEdges",
                },
                ".shape-geometric-precision": {
                    "shape-rendering": "geometricPrecision",
                },
            };

            addUtilities(newUtilities);
        },
        require("@tailwindcss/line-clamp"),
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
        function ({ addVariant }) {
            addVariant("upload-button", "&::-webkit-file-upload-button");
        },
        function ({ addUtilities }) {
            addUtilities(
                {
                    ".scrollbar-hide": {
                        "-ms-overflow-style": "none",
                        "scrollbar-width": "none",
                        "&::-webkit-scrollbar": {
                            display: "none",
                        },
                    },

                    ".scrollbar-default": {
                        "-ms-overflow-style": "auto",
                        "scrollbar-width": "auto",
                        "&::-webkit-scrollbar": {
                            display: "block",
                        },
                    },
                },
                ["responsive"]
            );
        },
        function ({ addUtilities }) {
            addUtilities(
                {
                    ".hidden-arrows": {
                        "&::-webkit-outer-spin-button": {
                            "-webkit-appearance": "none",
                            margin: 0,
                        },
                        "&::-webkit-inner-spin-button": {
                            "-webkit-appearance": "none",
                            margin: 0,
                        },
                        "&[type=number] ": {
                            "-moz-appearance": "textfield",
                        },
                    },
                },
                ["responsive"]
            );
        },
        function ({ addUtilities }) {
            addUtilities(
                {
                    ".modal-scrollbar": {
                        "&::-webkit-scrollbar": {
                            width: "4px",
                        },
                        "&::-webkit-scrollbar-track": {
                            // "box-shadow": "inset 0 0 5px grey",
                            // "border-radius": "10px",
                            background: "#f1f1f1",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            background: "#adadad",
                            "border-radius": "1px",
                        },
                    },
                    ".select-scrollbar": {
                        "&::-webkit-scrollbar": {
                            width: "4px",
                        },
                        "&::-webkit-scrollbar-track": {
                            // "box-shadow": "inset 0 0 5px grey",
                            // "border-radius": "10px",
                            background: "rgba(0,0,0,.1)",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            background: "#adadad",
                            "border-radius": "1px",
                        },
                    },
                    ".scrollbar-width": {
                        "&::-webkit-scrollbar": {
                            width: "5px",
                        },
                    },
                },
                ["responsive"]
            );
        },
        function ({ addUtilities }) {
            addUtilities(
                {
                    ".input-color-padding": {
                        "&::-webkit-color-swatch-wrapper": {
                            padding: 0,
                        },
                        "&::-webkit-color-swatch": {
                            border: "none",
                        },
                    },
                },
                ["responsive"]
            );
        },
        function ({ matchUtilities }) {
            matchUtilities({
                "input-color-rounded": (value) => ({
                    "&::-webkit-color-swatch": {
                        borderRadius: `${value}`,
                    },
                }),
            });
        },
    ],
};
