module.exports = {
    theme: {
        extend: {
            textShadow: {
                default: '0 2px 5px rgba(0, 0, 0, 0.2)',
                lg: '0 2px 10px rgba(0, 0, 0, 0.25)',
            },
        },
    },
    content: [
        "./src/**/*.{html,js}",
        "./node_modules/tw-elements/dist/js/**/*.js"
    ],
    plugins: [require("tw-elements/dist/plugin.cjs")],
    darkMode: "class"
};