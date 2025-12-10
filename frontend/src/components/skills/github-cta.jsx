import { Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const GithubCTA = () => {
  return (
    <section className="relative w-full py-20 bg-gray-900 dark:bg-black overflow-hidden flex items-center justify-center">
      
      {/* --- Background Pattern (Abstract Code/Grid) --- */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-500 opacity-20 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 text-center md:text-left">
          
          {/* --- Left: Text Content --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-900/30 border border-fuchsia-800 text-fuchsia-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Github size={14} /> Open Source
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Want to see the <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-600">source code?</span>
            </h2>
            
            <p className="text-gray-400 text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
              Explore my repositories to see how I structure my projects, my commit history, and my contributions to the open-source community.
            </p>
          </motion.div>

          {/* --- Right: The Action Button --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <a 
              href="https://github.com/YOUR_USERNAME" // REPLACE WITH YOUR LINK
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-all duration-300 hover:bg-fuchsia-50 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(232,121,249,0.5)] focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <div className="mr-3 p-1 bg-black rounded-full text-white group-hover:rotate-12 transition-transform duration-300">
                <Github size={20} />
              </div>
              <span className="text-lg font-bold">Visit GitHub</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};