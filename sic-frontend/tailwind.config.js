const newLocalFlowbite = 'flowbite/plugin';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
      
    },
    extend: {
      boxShadow: {
        'bottom-grey': '0px 9px 9px -2px rgba(82,70,70,0.33);',
        'bottom-white': '0px 9px 9px -2px rgba(255,255,255);'
      }
    },
  },
  plugins: [
    require(newLocalFlowbite)
]
}