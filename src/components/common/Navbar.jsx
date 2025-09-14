import { cn } from "@/lib/utils";

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
    <nav className={cn("z-10 top-7 left-1/3 translate-x-18 fixed md:flex items-center gap-5 rounded-full py-2 px-4 backdrop-blur-md bg-black/5 text-black dark:bg-fuchsia-200  transition-all duration-300 border-zinc-500 hidden  ")}>
      <a href="/" className="hover:text-fuchsia-200 transition-colors duration-100 dark:hover:text-fuchsia-900 text-shadow-lg/20 text-shadow-fuchsia-200 dark:text-shadow-none ">Home</a>
      <a href="/about" className="hover:text-fuchsia-200 transition-colors duration-100 dark:hover:text-fuchsia-900 text-shadow-lg/20 text-shadow-fuchsia-200 dark:text-shadow-none">About</a>
      <a href="/experience" className="hover:text-fuchsia-200 transition-colors duration-100 dark:hover:text-fuchsia-900 text-shadow-lg/20 text-shadow-fuchsia-200 dark:text-shadow-none">Experience</a>
      <a href="/contact" className="hover:text-fuchsia-200 transition-colors duration-100 dark:hover:text-fuchsia-900 text-shadow-lg/20 text-shadow-fuchsia-200 dark:text-shadow-none">Contact</a>
      <a href="/blog" className="hover:text-fuchsia-200 transition-colors duration-100 dark:hover:text-fuchsia-900 text-shadow-lg/20 text-shadow-fuchsia-200 dark:text-shadow-none">Blog</a>
    </nav>
   </div>
    )};