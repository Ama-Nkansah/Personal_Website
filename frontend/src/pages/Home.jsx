import { ThemeToggle } from "../components/home/ThemeToggle";
import { Hero } from "../components/home/Hero";   

export const Home = () => {

  return (
    <div className="h-screen bg-gradient-to-br from-white to-fuchsia-300 text-gray-900 dark:bg-none dark:bg-[#21292c] dark:text-gray-100 " id="home">
        <ThemeToggle/>
        <Hero />
    </div>
  );
};
 