import { useEffect, useState } from 'react';
import { ThemeToggle } from "../components/home/ThemeToggle";
import { Navbar } from "../components/common/Navbar";
import { Hero } from "../components/home/Hero"; 
import Loader from "../components/home/loader";
import AboutTeaser from '../components/about/aboutTeaser';    

export const Home = () => {
  const [loadingDone, setLoadingDone] = useState(false);
  const [shouldShowLoader, setShouldShowLoader] = useState(false);

  useEffect(() => {
    const navType = window.performance.getEntriesByType("navigation")[0]?.type;
    const isFreshVisit = navType === "reload" || navType === "navigate";
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
      <ThemeToggle />
      <Navbar />
      <Hero />
      <AboutTeaser/>
    </div>
  );
};
