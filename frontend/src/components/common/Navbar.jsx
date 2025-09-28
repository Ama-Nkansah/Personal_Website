import { cn } from "@/lib/utils";
import '../../index.css';

export const Navbar = () => { 
  return (
  <div>
    <nav className={cn("z-10 top-7 left-1/3 translate-x-18 fixed md:flex items-center gap-5 rounded-full py-2 px-4 backdrop-blur-md bg-black/5 text-black dark:bg-fuchsia-200  transition-all duration-300 border-zinc-500 hidden  ")}>
      <a href="/" className="nav-link hover:text-fuchsia-200 transition-colors duration-100 dark:hover:text-fuchsia-900 text-shadow-lg/20 text-shadow-fuchsia-200 dark:text-shadow-none ">Home</a>
      <a href="/about" className="nav-link hover:text-fuchsia-200 transition-colors duration-100 dark:hover:text-fuchsia-900 text-shadow-lg/20 text-shadow-fuchsia-200 dark:text-shadow-none">About</a>
      <a href="/experience" className="nav-link hover:text-fuchsia-200 transition-colors duration-100 dark:hover:text-fuchsia-900 text-shadow-lg/20 text-shadow-fuchsia-200 dark:text-shadow-none">Experience</a>
      <a href="/contact" className="nav-link hover:text-fuchsia-200 transition-colors duration-100 dark:hover:text-fuchsia-900 text-shadow-lg/20 text-shadow-fuchsia-200 dark:text-shadow-none">Contact</a>
      <a href="/blog" className="nav-link hover:text-fuchsia-200 transition-colors duration-100 dark:hover:text-fuchsia-900 text-shadow-lg/20 text-shadow-fuchsia-200 dark:text-shadow-none">Blog</a>
    </nav>
   </div>
    )};