import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {Footer} from "../common/footer.jsx";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval); 
          setTimeout(onComplete, 300); 
          return 100;
        }
        const jump = Math.floor(Math.random() * 10) + 1;
        return Math.min(prev + jump, 100);
      });
    }, 110);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mt-4">
        <motion.div
          className="h-full bg-gradient-to-r from-fuchsia-950 to-fuchsia-400"
          style={{ width: `${progress}%` }}
        />
      </div>

      <motion.div
        key={progress}
        className="mt-6 text-3xl font-mono tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {progress}%
      </motion.div>
      <Footer styles="absolute bottom-10 right-160" />
    </div>
  );
};

export default Loader;