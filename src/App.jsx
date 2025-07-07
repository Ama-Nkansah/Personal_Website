import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import { useState } from 'react';
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import Loader from './components/loader'; 

function App() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <div>
      <BrowserRouter>
      {loadingDone ? (
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        ) : (
          <Loader onComplete={() => setLoadingDone(true)} />
      )}
      </BrowserRouter>
    </div>
  );
 
}

export default App
