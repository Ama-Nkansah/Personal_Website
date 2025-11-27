import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import '../../index.css';

const navlinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <div className="relative">
        <nav
          className={cn(
            "z-10 top-7 left-1/3 translate-x-18 fixed md:flex items-center gap-5 rounded-full py-2 px-4 backdrop-blur-md bg-black/5 text-black dark:bg-fuchsia-200 transition-all duration-300 border-zinc-500 hidden"
          )}
        >
          {navlinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link hover:text-fuchsia-200 transition-colors duration-100 dark:hover:text-fuchsia-900 text-shadow-lg/20 text-shadow-fuchsia-200 dark:text-shadow-none"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* ✅ THE IMPORTANT PART: z-60 ensures this stays above menu overlay */}
      <div className="mt-2 md:hidden z-60 relative">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={24} className="text-gray-900 dark:text-gray-100" />
          ) : (
            <Menu size={24} className="text-gray-900 dark:text-gray-100" />
          )}
        </button>
      </div>

      {/* Overlay menu keeps original stacking */}
      {isOpen && (
        <div className="absolute top-0.5 right-0.5 w-screen bg-fuchsia-50 h-full dark:bg-[#21292c] flex flex-col items-center gap-5 py-20 shadow-lg md:hidden z-50">
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
};
