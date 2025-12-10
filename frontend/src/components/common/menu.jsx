import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
              className="nav-link hover:text-fuchsia-700 md:text-base transition-colors duration-100 dark:hover:text-fuchsia-900 text-shadow-lg/20 text-shadow-fuchsia-200 text-fuchsia-950 dark:text-shadow-none"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      <div className="fixed top-5 right-5 md:hidden z-[80]">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2"
        >
          {isOpen ? (
            <X size={25} className="text-gray-900 dark:text-gray-100" />
          ) : (
            <Menu size={25} className="text-gray-900 dark:text-gray-100" />
          )}
        </button>
      </div>

      {/* --- Mobile Full Screen Overlay --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }} // Slide from right
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-fuchsia-200 dark:bg-gray-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {navlinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.3 }}
                  className="text-3xl font-bold text-gray-800 dark:text-gray-100 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
