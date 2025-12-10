
import { Hero } from "../components/home/Hero";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-fuchsia-200/80 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Main Content */}
        <Hero />
      </motion.main>
    </div>
  );
}
