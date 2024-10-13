/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {animation: {
      'blink-border': 'blink 1s infinite', // Name the animation, set it to blink every second infinitely
    },
    keyframes: {
      blink: {
        '0%, 100%': { borderColor: 'transparent' }, // Border is transparent at the start and end
        '50%': { borderColor: 'red' },              // Border turns red in the middle of the animation
      },
    },
  },
  },
  plugins: [require('daisyui')],
}

