import { Expertise } from "./expertise";  
import {Card} from "../common/card";


export const Stack = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-fuchsia-300 text-gray-900 dark:bg-none dark:bg-[#21292c] dark:text-gray-100 overflow-x-hidden">
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold mt-10 translate-x-120 delius-regular ">My Skills & <span className="text-fuchsia-500 dark:text-fuchsia-300">Projects</span></h1>
        <p className="text-lg my-10 translate-x-90 leading-relaxed">
            A comprehensive overview of my technical skills and proficiency levels across 
            <br/><span className="block ml-35">various technologies and frameworks.</span>
            <hr className=" mt-5 translate-x-60 bg-fuchsia-400 border border-fuchsia-400 h-1 w-30 rounded-full" />
          </p>
      </div>

      <div className="grid md:grid-cols-8 items-center justify-center gap-5 ml-10">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20shadow-md" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md"/> 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md "/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" className="w-20 h-20 p-3 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"  className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md" /> 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md"/> 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md"/>      
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md"/>                 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className="w-20 h-20 p-2 rounded-2xl backdrop-blur-md  bg-black/20 border-black/20 dark:bg-white/10 border dark:border-white/20 shadow-md"/>               
      </div>
      <Expertise />
      <Card styling="mx-110 w-100 h-auto">
       <h1 className="pb-3 flex justify-center items-center text-2xl delius-regular font-extrabold">Always Evolving</h1>
       <hr className=" mb-5 translate-x-15 bg-black border  h-0.5 w-55 rounded-full" />
        <p className="ml-2 delius-regular">
          I'm currently diving deep into AI,understanding how models work and how to build smart, 
          real-world applications. 
          <br/>
          <span className="ml-6 delius-regular">
            I'm also learning to add advanced animations and dynamic interfaces to my projects.
            Every step is guided by curiosity and a drive to turn complex ideas into meaningful results.
            </span>
        </p>
      </Card>

    </div>
  );
}