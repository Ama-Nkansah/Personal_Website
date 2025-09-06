import { motion } from "framer-motion";
import myImage from "../../assets/cartoonify.jpg";
import  Title from "../home/TypewriterTitle";
import {SocialIcons} from "../common/socials"; 
import Button from "../common/button"; 
import {Logo} from "../common/my-logo";
import {MenuIcon} from "../common/menu";


function Hero(){
  return (
    <div>
      <Logo/>
      <MenuIcon/>
      <div className="h-screen md:block flex flex-col">
        <div className="md:-translate-y-10 mb-19 flex order-1 md:block justify-center">
          {/* Outer Circle */}
          <motion.div className=" w-54 aspect-square bg-fuchsia-300 dark:bg-fuchsia-200 rounded-full z-30
              md:w-[34%] md:translate-y-15 md:translate-x-25"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
                
              {/* My Image */}
            <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}>
              <img src={myImage} alt="my-picture" className="w-49 aspect-square mt-2 rounded-full mx-auto
                  md:w-[92%] md:translate-y-5 md:translate-x-1"/>
            </motion.div>
          </motion.div>
     </div>

      <div className="text-center md:-translate-y-6 md:text-left order-2 -translate-y-9 md:mt-0">
          <h1 className=" text-3xl mb-7 md:mb-0 font-bold text-fuchsia-600 dark:text-fuchsia-300
            md:text-5xl md:text-center md:-translate-y-100 md:translate-x-75">
            👋🏾 Ama Nkansah here,
          </h1>
          <h2 className="text-base px-2 mb-3 md:mb-0 md:text-2xl md:-translate-y-94 md:translate-x-180">
            Software Engineer & <Title/>
          </h2>
          <p className="text-center text-base italic mt-2 text-gray-700 dark:text-gray-300 md:-translate-y-90 md:translate-x-78">
            “I build what I dream, and I debug until it works.” – Ama Nkansah
          </p>
      </div>

      <Button />
      <SocialIcons/>
  </div>
</div>
  )
}

export {Hero}; 