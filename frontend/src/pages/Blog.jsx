import { motion } from "framer-motion";
import { ArrowLeft, Coffee, Sparkles, PenTool } from "lucide-react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter"; // Ensure you have this installed

export const Blog = () => {
  return (
    <div 
      id="blog" 
      className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-hidden transition-colors duration-300"
    >
      
      {/* --- Background Abstract Decoration --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <motion.div 
           animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="absolute -top-20 -right-20 w-96 h-96 bg-fuchsia-200 dark:bg-fuchsia-900/20 rounded-full blur-3xl opacity-50"
         />
         <motion.div 
           animate={{ scale: [1, 1.5, 1], rotate: [0, -45, 0] }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
           className="absolute -bottom-32 -left-20 w-80 h-80 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50"
         />
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 text-center px-6 max-w-2xl">

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
        >
          Thoughts in <span className="text-fuchsia-600 dark:text-fuchsia-400">Progress</span>
        </motion.h1>

        {/* Typewriter Subtext */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 h-8"
        >
          {/* <span className="mr-2">I'm currently writing about</span>
          <span className="font-semibold text-gray-900 dark:text-white border-b-2 border-fuchsia-400 pb-1">
            <Typewriter
              words={[
                'Artificial Intelligence.',
                'React Performance.',
                'Life as a Dev.',
                'Building Scalable Systems.',
                'The Future of Tech.'
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>*/}
        </motion.div> 

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-500 dark:text-gray-400 mb-10 leading-relaxed max-w-lg mx-auto"
        >
          Good things take time. I'm brewing up some detailed articles and tutorials. 
          Check back soon for insights, guides, and stories from my journey.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link 
            to="/"
            className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-fuchsia-500 hover:text-fuchsia-600 transition-all duration-300 shadow-sm"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>
      </div>

    </div>
  );
};
