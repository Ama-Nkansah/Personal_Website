import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";

export const About = ()=>{
  return(
    <div className="min-h-screen bg-gradient-to-br from-white to-fuchsia-300 text-gray-900 dark:bg-none dark:bg-[#21292c] dark:text-gray-100 overflow-x-hidden ">
       <ThemeToggle/>
    </div>
  );
}   