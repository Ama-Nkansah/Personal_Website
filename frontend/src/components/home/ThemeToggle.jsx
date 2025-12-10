import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "../../hooks/ThemeContext";

export const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-6 right-18 z-20 p-2 rounded-full transition-all duration-300 shadow-lg",
        "bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700",
        "hover:bg-fuchsia-100 dark:hover:bg-fuchsia-900 hover:scale-110",
        "focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
      )}
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <Moon className="w-4 h-4 text-fuchsia-300" />
      ) : (
        <Sun className="w-4 h-4 text-fuchsia-600" />
      )}
    </button>
  );
};