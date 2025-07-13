import { motion } from "framer-motion";
import myImage from "../assets/cartoonify.jpg" ;

function Hero(){
  return (
    <div className="h-screen">
       {/* Outer Circle */}
    <motion.div className="w-[34%] aspect-square bg-fuchsia-300 dark:bg-fuchsia-200 rounded-full z-30 translate-y-15 translate-x-25"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
          
         {/* My Image */}
      <motion.div
       initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}>
        <img src={myImage} alt="my-picture" className="z-50 w-[90%] aspect-square rounded-full translate-y-7 translate-x-6"/>
      </motion.div>
    </motion.div>
  </div>
  )
}

export {Hero}; 