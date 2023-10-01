/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Existing paths
    "./views/**/*.handlebars", // New path for handlebars files
    "./dist/**/*.js"
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter var'],
    }
  },
  plugins: [],
}

