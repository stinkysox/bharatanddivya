/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wedding-primary': '#0b1d3a',    // Royal Blue (Main)
        'wedding-accent': '#c5a059',     // Gold
        'wedding-secondary': '#72383D',  // Maroon (Curtains)
        'wedding-contrast': '#162a4a',   // Blue Contrast
        'wedding-text': '#f8f1e7',
      },
      fontFamily: {
        royal: ['var(--font-royal)', 'serif'], // Assuming font-royal is handled in layout or globals
      }
    },
  },
  plugins: [],
}
