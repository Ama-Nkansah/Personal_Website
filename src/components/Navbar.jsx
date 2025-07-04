import { cn } from "@/lib/utils";
import { useState,useEffect } from "react";
import {CodeXml} from "lucide-react";


const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About',href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => { 
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[]);

  
  return (
  //<nav className={cn("fixed z-40 w-full bg-fuchsia-300 h-18 p-3 transition-all duration-300",
   //isScrolled ? "py-3 bg-background/80 backdrop-blur-lg shadow-xs" : "py-5")}
 // >
  <div>
    <div className="container flex items-center px-5 py-4 gap-2">
      <a className="text-xl font-medium flex items-center gap-1 dark:text-fuchsia-200">
        <span>
          <span className="text-glow text-foreground stroke-black"style={{ fontFamily: "Rubik Bubbles, system-ui", fontSize: '24px', fontStyle:"normal" }}>Ama </span> <CodeXml className="inline-block"/> 
        </span>
      </a>
    </div>
    

    <nav className={cn("z-10 top-14 left-1/2 translate-x-1/2 fixed flex items-center gap-5 rounded-full py-2 px-4 backdrop-blur-md")}>
    
      </nav>
   </div>
    )};