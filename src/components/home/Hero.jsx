import { motion } from "framer-motion";
import myImage from "../../assets/cartoonify.jpg";
import  Title from "../home/TypewriterTitle";
import {SocialIcons} from "../common/socials"; 
import Button from "../common/button"; 
import {Logo} from "../common/my-logo";

function Hero(){
  return (
    <div>
      <Logo/>
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


      <div>
          <h1 className="md:text-6xl font-bold text-center mt-10 text-fuchsia-600 dark:text-fuchsia-300 -translate-y-100 translate-x-75">
            👋🏾 Ama Nkansah here,
          </h1>
          <h2 className="text-2xl -translate-y-94 translate-x-224">
            Software Engineer & <Title/>
          </h2>
          <p className="text-center text-sm italic mt-2 text-gray-700 dark:text-gray-300 -translate-y-90 translate-x-78">
            “I build what I dream, and I debug until it works.” – Ama Nkansah
          </p>
      </div>

      <Button/>
      <SocialIcons/>
  </div>
</div>
  )
}

export {Hero}; 