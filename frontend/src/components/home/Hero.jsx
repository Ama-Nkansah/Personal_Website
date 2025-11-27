import { motion } from "framer-motion";
import myImage from "../../assets/cartoonify.jpg";
import  Title from "../home/TypewriterTitle";
import {SocialIcons} from "../common/socials"; 
import Button from "../common/button"; 
import {Logo} from "../common/my-logo";
import { ThemeToggle } from "../home/ThemeToggle";


function Hero(){
  return (
    <section>
    <div className="md:grid md:grid-cols-2 justify-center">
      <div className="hidden md:flex">
         <Logo/>
         <ThemeToggle/>
      </div>
        <div className=" flex justify-center items-center md:col-start-1 md:col-end-2 md:mb-6 mb-3">
          {/* Outer Circle */}
          <motion.div className=" w-60 aspect-square bg-fuchsia-300 dark:bg-fuchsia-200 rounded-full z-30
              md:w-[34%] md:translate-y-15 md:translate-x-25"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
                
              {/* My Image */}
            <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}>
              <img src={myImage} alt="my-picture" className="w-55 aspect-square mt-2 rounded-full mx-auto
                  md:w-[92%] md:translate-y-5 md:translate-x-1"/>
            </motion.div>
          </motion.div>
     </div>

      <div className="text-center md:text-left col-start-2 col-end-3 md:mt-0">
          <h1 className=" text-3xl mb-3 font-bold text-fuchsia-600 dark:text-fuchsia-300
            md:text-5xl text-center">
            👋🏾 Ama Nkansah here,
          </h1>
          <h2 className="text-base px-2 mb-3 md:text-2xl">
            Software Engineer & <Title/>
          </h2>
          <p className="text-center text-sm md:text-base italic mt-6 text-gray-700 dark:text-gray-300 ">
            “I build what I dream, and I debug until it works.” – Ama Nkansah
          </p>
      </div>

          <div className="flex flex-col pt-8 md:gap-4 md:ml-180 md:mb-120 justify-center items-center p-12">
            <Button />
            <SocialIcons/>
          </div>
  </div>
  </section>

  )
}

export {Hero}; 