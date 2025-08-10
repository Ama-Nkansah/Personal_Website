import {Stack} from "../components/skills/tech-stack";
import {Navbar} from "../components/common/Navbar";
import { ThemeToggle } from "../components/home/ThemeToggle";
import { Footer } from "../components/common/footer"; 

export const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-fuchsia-300 text-gray-900 dark:bg-none dark:bg-[#21292c] dark:text-gray-100 overflow-x-hidden">
      <ThemeToggle />
      <Navbar />
      <Stack />
      <Footer className="translate-72"/>
    </div>
  );
}