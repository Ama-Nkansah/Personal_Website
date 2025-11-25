import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {Navbar} from "../common/menu";
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
     <Navbar/>
    <div id="about-full" className="min-h-screen bg-gradient-to-br from-white to-fuchsia-300 text-gray-900 dark:bg-none dark:bg-[#21292c] dark:text-gray-100 overflow-x-hidden">

      <h1 className="text-2xl md:text-4xl font-bold text-center mt-25 -translate-y-14 text-shadow-lg/20 text-shadow-fuchsia-400  ">Pieces of My Journey</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 -translate-y-20">
         <Carousel />
          <p className="px-10 text-base delius-regular md:mt-40 text-center">
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