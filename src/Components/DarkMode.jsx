import React, { useEffect } from 'react';
import { MdLightMode } from "react-icons/md";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light" // Default to "light"
  );

  const element = document.documentElement; // Access the <html> element directly

  // Update theme based on state changes
  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div> 
      {/* Single button to toggle between light and dark mode */}
      <button  
      
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className=' font-medium  w-14 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-6 z-10'
      >
        {theme === "light" ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default DarkMode;
