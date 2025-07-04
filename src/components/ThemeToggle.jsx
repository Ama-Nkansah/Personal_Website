import {Sun , Moon} from "lucide-react";
import { useState ,useEffect } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);
  
 const toggleTheme = () => { 
  const newMode = !isDarkMode;
  setIsDarkMode(newMode);

  if (newMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

  return (
    <button onClick={toggleTheme} className = {cn("fixed top-5 right-4 p-2 rounded-full transition-colors duration-300 bg-gray-500",
      "focus:outline-1 z-50 dark:outline-fuchsia-200"
    )}
    >
      {isDarkMode ? < Moon className="h-5 w-5 text-black-900 dark:text-fuchsia-200"/> : <Sun className="h-5 w-5 text-black"/>}
    </button>
  );
}