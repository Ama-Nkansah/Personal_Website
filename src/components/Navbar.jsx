import { cn } from "@/lib/utils";
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
  
  return (
  <div>
    <div className="container flex items-center px-5 py-4 gap-2">
      <a href="/" className="text-xl font-medium flex items-center gap-1 dark:text-fuchsia-200 mt-0.5">
        <span>
          <span className="text-glow text-foreground stroke-black"style={{ fontFamily: "Rubik Bubbles, system-ui", fontSize: '24px', fontStyle:"normal" }}>Ama </span> <CodeXml className="inline-block"/> 
        </span>
      </a>
    </div>
    
    <nav className={cn("z-10 top-7 left-1/3 translate-x-25 fixed flex items-center gap-5 rounded-full py-2 px-4 backdrop-blur-md bg-black/50 text-black dark:bg-fuchsia-200 transition-all duration-300 border-zinc-500 ")}>
      <a href="/" className="hover:text-fuchsia-200 transition-colors duration-100dark:hover:text-fuchsia-900">Home</a>
      <a href="/about" className="hover:text-fuchsia-200 transition-colors duration-100 dark:hover:text-fuchsia-900">About</a>
      <a href="/portfolio" className="hover:text-fuchsia-200 transition-colors duration-100 dark:hover:text-fuchsia-900">Portfolio</a>
      <a href="/contact" className="hover:text-fuchsia-200 transition-colors duration-100 dark:hover:text-fuchsia-900">Contact</a>
      <a href="/blog" className="hover:text-fuchsia-200 transition-colors duration-100 dark:hover:text-fuchsia-900">Blog</a>
    </nav>
   </div>
    )};