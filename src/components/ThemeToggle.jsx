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
    <button onClick={toggleTheme} className = {cn("fixed top-5 right-5 p-2 rounded-full transition-colors duration-300",
      "focus:outline-1"
    )}
    >
      {isDarkMode ? < Moon className="h-5 w-5 text-blue-900"/> : <Sun className="h-5 w-5 text-amber-300"/>}
    </button>
  );
}