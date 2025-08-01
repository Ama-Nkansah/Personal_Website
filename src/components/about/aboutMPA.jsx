import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutTeaser from "./aboutTeaser";
import Carousel from "./carousel"; 

export default function AboutMPA() {

   const location = useLocation();
   const shouldScroll =  location.state?.scrollToFull;

  useEffect(() => {
    if (shouldScroll)
      {
      const fullSection = document.getElementById("about-full");
      fullSection?.scrollIntoView({ behavior: "smooth"});
    }
  });

  return(
  <div>
    <AboutTeaser
     isFullPage={true}
     showButton={false}
     />

    <div id="about-full" className="min-h-screen bg-gradient-to-br from-white to-fuchsia-300 text-gray-900 dark:bg-none dark:bg-[#21292c] dark:text-gray-100 overflow-x-hidden">

      <button className="sticky z-50 m-7 bg-fuchsia-300
             px-4 py-2 rounded-full shadow-lg font-semibold 
             hover:bg-fuchsia-400 transition-all duration-300
             dark:bg-fuchsia-200 dark:hover:bg-fuchsia-300 text-black"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
       👆 Return to Preview
      </button>
      <h1 className="text-4xl font-bold text-center -translate-y-14 ">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 -translate-y-20">
         <Carousel />
      </div>
     
      
</div>
  </div>
  )};