
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  darkMode: "class",
  theme: {
    extend: {
       colors:{ 
        
        primary: "#f57c00",
        secondary: "#ef6c00",
     },
       container: {
            center: true,
           padding: {
             DEFAULT:"1rem",
         sm:"1rem",
           }
       }
    },
  },
  plugins: [],
}
