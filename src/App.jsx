import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import { useState } from 'react';
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import Loader from './components/loader'; 

function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
 
}

export default App