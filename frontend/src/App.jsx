import { Routes, Route } from "react-router-dom";
import {Footer} from "./components/common/footer";
import Contact  from "./pages/Contact";
import { Skills } from "./pages/Skills";
import { About } from "./pages/About";
import Home from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import { useEffect, useState } from "react";
import Loader from "./components/home/loader";


function App() {
  //   const [loadingDone, setLoadingDone] = useState(false);
  //   const [shouldShowLoader, setShouldShowLoader] = useState(false);
  
  // useEffect(() => {
  //   const browserNavType =
  //       performance.getEntriesByType("navigation")[0]?.type;
  //       console.log("Browser Navigation Type:", browserNavType);
  
  
  //   const isFreshVisit =
  //   browserNavType === "navigate" ||
  //   browserNavType === "reload";
  
  //   if (isFreshVisit) {
  //     setShouldShowLoader(true);
  //   } else {
  //     setLoadingDone(true);
  //   }
  // }, []); 
   
  
  //   // if (!loadingDone && shouldShowLoader) {
    //   return <Loader onComplete={() => setLoadingDone(true)} />;
    // }

  return (
    <div>
      <Routes>
        {/* Each route renders the same App layout but scrolls to section */}
        <Route
          path="/"
          element={
            <div>
              <section id="home">
                <Home />
              </section>

              {/* <section id="about">
                <About />
              </section>

              <section id="experience">
                <Skills />
              </section>

              <section id="contact">
                <Contact />
              </section> */}
            </div>
          }
        />
        {/* Optional: if someone visits /experience directly */}
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="py-2 text-center text-sm dark:bg-fuchsia-900/30">
          <Footer />
        </div>
    </div>
  );
}

export default App;
