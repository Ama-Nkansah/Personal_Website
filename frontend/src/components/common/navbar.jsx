import {Navbar} from "../common/menu.jsx";
import { ThemeToggle } from "../home/ThemeToggle.jsx";
import { Logo } from "./my-logo.jsx";


const FullNavbar = ()=>{
  return(
    <div className="md:hidden flex  flex-row justify-between">
      <Logo/>
      <ThemeToggle/>
      <Navbar/>
    </div>
  );
}

export default FullNavbar;