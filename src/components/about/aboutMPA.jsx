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
      <h1 className="text-4xl font-bold text-center -translate-y-14 text-shadow-lg/20 text-shadow-fuchsia-400  ">Pieces of My Journey</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 -translate-y-20">
         <Carousel />
          <p className="px-10 text-base delius-regular mt-50 text-center">
          👈 This space captures pieces of me—snapshots from events I’ve attended,
          moments I’ve volunteered, and quiet milestones that often go unseen. It’s more than just a collection of pictures;
          it’s a reflection of the effort, intention, and heart I’ve poured into every step of my journey.
          <br/>
          Whether I was behind the scenes lending a hand, standing in front of a crowd, or simply showing up to learn and grow,
          each moment has played a part in shaping who I’m becoming. These glimpses tell a story of passion, persistence,
          and purpose—and I’m grateful to share that story with you.
         </p>
     </div>

     </div>
  </div>
  )};