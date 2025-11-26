import { ThemeToggle } from "../components/home/ThemeToggle";
import { Hero } from "../components/home/Hero";   
import FullNavbar from "../components/common/navbar";

export const Home = () => {

  return (
    <div className="h-full bg-gradient-to-br from-white to-fuchsia-300 text-gray-900 dark:bg-none dark:bg-[#21292c] dark:text-gray-100 " id="home">
      <FullNavbar />
      <Hero />
    </div>
  );
};
 