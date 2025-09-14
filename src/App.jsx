import { Routes, Route } from "react-router-dom";
import {Navbar} from "./components/common/Navbar";
import {Footer} from "./components/common/footer";
import { Skills } from "./pages/Skills";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import {NotFound} from "./pages/NotFound";


function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* Each route renders the same App layout but scrolls to section */}
        <Route
          path="/"
          element={
            <div>
              <section id="home">
                <Home />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="experience">
                <Skills />
              </section>

            </div>
          }
        />
        {/* Optional: if someone visits /experience directly */}
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
