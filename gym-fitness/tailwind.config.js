/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFC5E3",
        "primary-300": "#FF81C1",
        "primary-500": "#E9499A",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
        "secondary-700": "#F2A763"
      },
      screens:{
        xs:"480px",
        sm:"768px",
        md:"1060px",
      }
    },
  },
  plugins: [],
}

