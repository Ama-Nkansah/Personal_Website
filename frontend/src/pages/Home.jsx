import { ThemeToggle } from "../components/home/ThemeToggle";
import { Navbar } from "../components/common/Navbar";
import { Hero } from "../components/home/Hero";   

export const Home = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-fuchsia-300 text-gray-900 dark:bg-none dark:bg-[#21292c] dark:text-gray-100 overflow-x-hidden" id="home">
        <ThemeToggle/>
        <Navbar />
        <Hero />
    </div>
  );
};
