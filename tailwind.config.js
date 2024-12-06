/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Syne', 'sans-serif'], // Default font family for sans-serif in Tailwind
      },
      fontSize: {
        '3xl': ['2rem', '2.4rem'],
        '5xl': ['3.25rem', '3.9rem'],
      },
      colors: {
        'light-gray': '#545b63',
      },
    },
  },
  plugins: [],
};
