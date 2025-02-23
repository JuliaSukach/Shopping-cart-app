// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/JSX/TS/TSX files in the src folder
    "./public/index.html", // Include the HTML file
  ],
  theme: {
    extend: {
      fontFamily: {
        circleBold: ['CirceSlabBold', 'sans-serif'],
        circle: ['Circe', 'sans-serif'],
      }
    },
  },
  plugins: [],
};