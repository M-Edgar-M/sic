const newLocalFlowbite = 'flowbite/plugin';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primary': '#2563eb',
      'midnight': '#121063',
      'bermuda': '#78dcca',
    },
    fontFamily: {
      'josefin-sans': ['Josefin Sans', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'serif': ['Crimson Text', 'serif']

    }
  },
  plugins: [
    require(newLocalFlowbite)
]
}