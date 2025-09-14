import AboutMPA from "../components/about/aboutMPA";
import AboutTeaser from '../components/about/aboutTeaser'; 

export const About = ()=>{
  return(
     
    <div className="min-h-screen bg-gradient-to-br from-white to-fuchsia-300 text-gray-900 dark:bg-none dark:bg-[#21292c] dark:text-gray-100 overflow-x-hidden " id="about">
      <AboutTeaser/>
      <AboutMPA />
    </div>
  );
}  