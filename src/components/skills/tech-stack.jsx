import {Navbar} from "../common/Navbar";
import { Expertise } from "./expertise";  
import {Card} from "../common/card";


export const Stack = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-fuchsia-300 text-gray-900 dark:bg-none dark:bg-[#21292c] dark:text-gray-100 overflow-x-hidden">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold mt-10 translate-x-110 delius-regular ">My Skills & <span className="text-fuchsia-500 dark:text-fuchsia-300">Expertise</span></h1>
        <p className="text-lg my-10 translate-x-90 leading-relaxed">
            A comprehensive overview of my technical skills and proficiency levels across 
            <br/><span className="block ml-35">various technologies and frameworks.</span>
            <hr className=" mt-5 translate-x-60 bg-fuchsia-400 border border-fuchsia-400 h-1 w-30 rounded-full" />
          </p>
      </div>

      <div className="grid md:grid-cols-8 items-center justify-center gap-5 ml-10">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20shadow-md" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md"/> 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md "/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" className="w-20 h-20 p-3 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"  className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md" /> 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md"/>        
      </div>
      <Expertise />
      <Card />

    </div>
  );
}