import {Route,Routes} from 'react-router-dom';
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Skills} from "./pages/Skills";
import {NotFound} from "./pages/NotFound";


function App() {
  return (
    <div>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
    </div>
  );
 
}

export default App