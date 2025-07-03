import { cn } from "@/lib/utils";
import { useState } from "react";

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
  
  return 
  <nav className={cn("fixed z-40 w-full bg-cyan-300 h-20 p-3")}>

  </nav>;
  };