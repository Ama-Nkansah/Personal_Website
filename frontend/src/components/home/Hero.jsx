import { motion } from "framer-motion";
import myImage from "../../assets/cartoonify.jpg";
import Title from "../home/TypewriterTitle";
import { SocialIcons } from "../common/socials";
import Button from "../common/button";
import {Logo} from "../../components/common/my-logo";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-5 md:mt-9 md:px-12 lg:px-20">
       <Logo />
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">

        {/* --- Image Content (Right on Desktop, Bottom on Mobile) --- */}
       <div className="flex justify-center items-center order-1 lg:order-1 relative">
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Background Blob/Circle */}
            <motion.div 
              className="absolute inset-0 bg-fuchsia-300/50 dark:bg-fuchsia-900/40 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Solid Circle Container */}
            <div className="relative w-full h-full rounded-full border-4 border-fuchsia-100 dark:border-fuchsia-900/30 overflow-hidden shadow-2xl bg-fuchsia-200 dark:bg-fuchsia-950">
              <motion.img
                src={myImage}
                alt="Ama Nkansah"
                className=" object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              />
            </div>
          </motion.div>
        </div> 


        {/* --- Text Content (Left on Desktop, Top on Mobile) --- */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl md:text-6xl font-extrabold tracking-tight mb-4">
              <span className="block text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400 mb-2">
                👋🏾 Hello,
              </span>
              Ama Nkansah <span className="text-fuchsia-600 dark:text-fuchsia-400">here.</span>
            </h1>

            <h2 className="text-base md:text-2xl font-semibold flex flex-col md:flex-row gap-2 items-center lg:items-start justify-center lg:justify-start mb-4 text-gray-700 dark:text-gray-200">
              <span>Software Engineer &</span>
              <span className="text-fuchsia-500 dark:text-fuchsia-300">
                <Title />
              </span>
            </h2>

            <p className="max-w-md text-base md:text-lg italic text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              “I build what I dream, and I debug until it works.”
            </p>

            {/* CTA Section */}
            <div className="flex flex-col md:-mx-10 md:gap-3 w-full items-center justify-center">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <Button /> {/* Ensure your Button component handles its own sizing */}
              </div>
              <div className="flex gap-4">
                <SocialIcons />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export { Hero };