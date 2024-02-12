/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        slateTransparent: "rgba(234, 234, 234, 0.3)",
        bgProduct: "rgba(255, 249, 246, 0.4)",
        bgHoverProduct: "rgba(255, 78, 78, 0.2)",
      },
      backgroundImage: {
        cameraBg: "url('/images/cameraBg.jpg')",
      },
    },
  },
  plugins: [],
};
