import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "../../hooks/ThemeContext";

export const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div> 
      <button 
        onClick={toggleTheme} 
        className={cn(
          "sticky md:ml-0 ml-49 top-5 md:translate-x-300 right-4 p-2 md:mt-6 rounded-full transition-colors duration-300 bg-fuchsia-300",
          "focus:outline-1 z-50 dark:outline-fuchsia-200"
        )}
      >
        {isDarkMode ? (
          <Moon className="h-3 w-3 md:h-5 md:w-5 text-black"/> 
        ) : (
          <Sun className="h-3 w-3 md:h-5 md:w-5 text-black"/>
        )}
      </button>
    </div>
  );
};