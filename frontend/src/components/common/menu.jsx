import {Menu,X} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import '../../index.css';

const navlinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
]

export const Navbar = () => {

const [isOpen, setIsOpen] = useState(false);

  return(
    <section>
   <div className="relative">
    <nav className={cn("z-10 top-7 left-1/3 translate-x-18 fixed md:flex items-center gap-5 rounded-full py-2 px-4 backdrop-blur-md bg-black/5 text-black dark:bg-fuchsia-200  transition-all duration-300 border-zinc-500 hidden  ")}>
    {navlinks.map((link) =>
      <a key={link.name} href={link.href} className="nav-link hover:text-fuchsia-200 transition-colors duration-100 dark:hover:text-fuchsia-900 text-shadow-lg/20 text-shadow-fuchsia-200 dark:text-shadow-none">
        {link.name}
      </a>)}
    </nav>
    </div>
   
   
     <div className="absolute m-2 left-92 top-2 md:hidden z-90">
      <button
       onClick={() => setIsOpen(!isOpen)} 

      >
        {console.log("isOpen:", isOpen)}
        {isOpen ? (
          <X size={21} className="text-gray-900 dark:text-gray-100"/> 
        ):(
           <Menu size={21} className="text-gray-900 dark:text-gray-100"/>
        )}
      </button>
      </div>

      {isOpen && (
        <div className="absolute top-0.5 w-screen bg-white h-full dark:bg-black flex flex-col items-center gap-5 py-20 shadow-lg md:hidden z-80">
          {navlinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xl font-bold"
              onClick={() => setIsOpen(false)} 
            >
              
              {link.name}
            </a>
          ))}
        </div>
      )}
   </section>
  );
}