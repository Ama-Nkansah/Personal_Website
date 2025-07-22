import {MoveRight} from "lucide-react";
import myImg from "../../assets/my-img.jpg";


export default function AboutTeaser() {
  return (
    <div className="h-full justify-center bg-white dark:bg-[#2b3336] text-gray-900 dark:text-gray-100 p-8">

      <h1 className="w-1/2 translate-x-70 text-3xl font-bold text-shadow-lg/20 text-shadow-fuchsia-200">About Me</h1>

      <div className="grid grid-cols-2 grid-rows-2 mt-5 gap-1 h-screen border border-fuchsia-300">
        <p className="col-start-1 p-10 py-15 delius-regular">
          I build smart, functional products out of raw ideas whether you’re a founder with a plan or just figuring it out. 
          Behind the code, I’m all about systems thinking, clean architecture, and building things that can actually grow.
          <br />
          <br />
          My journey into tech started in Level 100, exploring data analysis, but something felt missing. I wasn’t fulfilled. 
          I needed more — more creativity, more problem-solving, more impact. That “aha!” moment came in Level 200, when I transitioned fully into software engineering.
          Since then, I’ve been obsessed with turning ideas into code that solves real problems and scales with purpose.
        </p>
        <img src= {myImg} className="col-start-2 h-[80%] w-[40%] aspect-square rounded-full translate-10"/>

          <h1 className="px-60 py-30 col-start-1 text-3xl font-bold text-shadow-lg/20 text-shadow-fuchsia-200">My Approach</h1>
          <p className="col-start-2 grid-wra pt-5 px-10 delius-regular ">
          I like to keep things simple, fast, and effective. I believe in testing ideas early, building smart MVPs, and improving as we go. Every project I touch is built with clarity, structure, and growth in mind.
          I work full-stack using tools like React, Tailwind, Node.js, Express, and databases. I also integrate AI and cloud tools to make things even smarter.
          <br />
          <br/>
          But beyond the code, I’m a tech content creator, public speaker, and mentor. I love sharing what I know, helping beginners grow, and making tech feel less scary, simple and more exciting.
          At the heart of it all, my goal is simple:
          Build great systems and help more people feel like they belong in tech.  
          <br />  
          <br />
          👇 Want to know how I got here, what tools I love, or what fuels my creativity?
        </p>

        <div className=" flex justify-end p-3 translate-x-170">
        <a href="https://ama-nkansah.vercel.app" className="text-fuchsia-400 hover:underline">See more<MoveRight className="inline-block ml-3 text-fuchsia-400"/></a>
        </div>

      </div>
    </div>

  )};