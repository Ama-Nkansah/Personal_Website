import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../common/menu"; // Make sure path is right
import Carousel from "./carousel"; 

export default function AboutMPA() {
   const location = useLocation();
   const shouldScroll = location.state?.scrollToFull;

  useEffect(() => {
    if (shouldScroll) {
      const fullSection = document.getElementById("about-full");
      fullSection?.scrollIntoView({ behavior: "smooth" });
    }
  }, [shouldScroll]);

  return(
  <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans">
     {/* <Navbar/> Ensure Navbar is rendered in parent or here */}
     
    <div id="about-full" className="container mx-auto px-6 py-24 md:py-32">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Pieces of My <span className="text-fuchsia-600">Journey</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Snapshots of milestones, volunteering, and the quiet moments that shaped me.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         
         {/* Left: The Captivating Carousel */}
         <div className="order-1 lg:order-1 flex justify-center">
             <Carousel />
         </div>

         {/* Right: The Narrative */}
          <div className="order-2 lg:order-2 space-y-6">
            <div className="bg-fuchsia-50 dark:bg-gray-900 p-8 rounded-3xl border border-fuchsia-100 dark:border-gray-800 shadow-sm relative">
              {/* Decorative Quote Icon */}
              <span className="absolute -top-7 left-8 text-6xl text-fuchsia-200 dark:text-fuchsia-900 font-serif">“</span>
              
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 delius-regular relative z-10">
                This space captures pieces of me snapshots from events I’ve attended,
                moments I’ve volunteered, and quiet milestones that often go unseen. 
                It’s more than just a collection of pictures; it’s a reflection of the effort, 
                intention, and heart I’ve poured into every step.
              </p>
              
              <div className="w-12 h-1 bg-fuchsia-400 mt-6 mb-6"></div>

              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                Whether I was behind the scenes lending a hand, standing in front of a crowd, 
                or simply showing up to learn and grow, each moment has played a part in shaping who I’m becoming.
              </p>
                <span className="absolute left-69 text-6xl text-fuchsia-200 dark:text-fuchsia-900 font-serif">„</span>
            </div>
         </div>
     </div>

     </div>
  </div>
  )};