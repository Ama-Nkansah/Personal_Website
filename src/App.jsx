import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {NotFound} from "./pages/NotFound";


function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
 
}

export default App