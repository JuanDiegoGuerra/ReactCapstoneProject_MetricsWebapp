/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-color': '#F5F7FB',
        'blue-1': '#2D4573',
      },
      backgroundColor: {
        'blue-1': '#2D4573',
        'blue-2': '#35548B',
        'blue-3': '#4064A6',
        'blue-4': '#4369B2',
        'blue-5': '#5688E4',
      },
    },
  },
  plugins: [],
};
