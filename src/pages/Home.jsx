import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";

export const Home = ()=>{
  return(
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[hsl(196,14%,15%)] dark:text-gray-100 overflow-x-hidden ">
       <ThemeToggle/>
       <Navbar/>

    </div>
  );
}   