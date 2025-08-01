import { useEffect, useState } from 'react';
import { ThemeProvider } from "../hooks/ThemeContext";
import { ThemeToggle } from "../components/home/ThemeToggle";
import { Navbar } from "../components/common/Navbar";
import { Hero } from "../components/home/Hero"; 
import Loader from "../components/home/loader";
import AboutTeaser from '../components/about/aboutTeaser';    

export const Home = () => {

  const [loadingDone, setLoadingDone] = useState(false);
  const [shouldShowLoader, setShouldShowLoader] = useState(false);

useEffect(() => {
  const browserNavType =
      performance.getEntriesByType("navigation")[0]?.type;
      console.log("Browser Navigation Type:", browserNavType);


  const isFreshVisit =
  browserNavType === "navigate" ||
  browserNavType === "reload";

  if (isFreshVisit) {
    setShouldShowLoader(true);
  } else {
    setLoadingDone(true);
  }
}, []); 
 

  if (!loadingDone && shouldShowLoader) {
    return <Loader onComplete={() => setLoadingDone(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-fuchsia-300 text-gray-900 dark:bg-none dark:bg-[#21292c] dark:text-gray-100 overflow-x-hidden">
      <ThemeProvider>
        <ThemeToggle/>
        <Navbar />
        <Hero />
       <AboutTeaser/>
      </ThemeProvider>
    </div>
  );
};
