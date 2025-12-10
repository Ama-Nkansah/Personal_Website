import { Routes, Route } from "react-router-dom";
import {Footer} from "./components/common/footer";
import Contact  from "./pages/Contact";
import {Stack} from "./pages/Skills";
import { About } from "./pages/About";
import Home from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import { Navbar } from "./components/common/menu";
import { ThemeToggle } from "./components/home/ThemeToggle";
import {Logo} from "./components/common/my-logo";

function App() {    
  return (
    <div>
    <Logo />
    <Navbar />
    <ThemeToggle />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <section id="home">
                <Home />
              </section>
            </div>
          }
        />
        {/* Optional: if someone visits /experience directly */}
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Stack />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="py-2 text-center text-sm dark:bg-fuchsia-900/30">
          <Footer />
      </div>
    </div>
  );
}

export default App;
