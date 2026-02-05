/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#0f766e",
                "primary-hover": "#115e59",
                "background-light": "#ffffff",
                "background-dark": "#0f172a",
                "surface-light": "#f8fafc",
                "surface-dark": "#1e293b",
                // Adding the hex values the user seems to want
                "dash-bg": "#0f1219",
                "dash-sidebar": "#0b0e14",
                "dash-card": "#151a23",
                "dash-border": "#1e2532",
            },
            fontFamily: {
                display: ["Inter", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
            },
        },
    },
    plugins: [],
};
