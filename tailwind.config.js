/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#570000",
                "on-primary": "#ffffff",
                secondary: "#a6392b",
                "secondary-container": "#fc7966",
                "on-secondary-fixed": "#410000",
                surface: "#f9f9f9",
                "on-surface": "#1a1c1c",
                "surface-container-low": "#f3f3f3",
                "surface-container-lowest": "#ffffff",
                outline: "#8e706c",
                // ... add other colors from your list as needed
            },
            fontFamily: {
                headline: ["Manrope", "sans-serif"],
                body: ["Work Sans", "sans-serif"],
                label: ["Work Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
}