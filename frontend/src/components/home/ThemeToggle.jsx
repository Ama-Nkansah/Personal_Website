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
          "sticky top-5 -translate-y-2 translate-x-85 md:translate-y-0 md:translate-x-300 right-4 p-2 mt-6 rounded-full transition-colors duration-300 bg-gray-500",
          "focus:outline-1 z-50 dark:outline-fuchsia-200"
        )}
      >
        {isDarkMode ? (
          <Moon className="h-2 w-2 md:h-5 md:w-5 text-black-900 dark:text-fuchsia-200"/> 
        ) : (
          <Sun className="h-2 w-2 md:h-5 md:w-5 text-black"/>
        )}
      </button>
    </div>
  );
};