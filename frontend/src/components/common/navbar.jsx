import {Navbar} from "../common/menu.jsx";
import { ThemeToggle } from "../home/ThemeToggle.jsx";
import { Logo } from "./my-logo.jsx";


const FullNavbar = ()=>{
  return(
    <section className="pt-4 pb-8 mx-4 md:hidden flex flex-row justify-between"> 
      <div>
        <Logo/>
      </div>
      <div className="flex flex-row justify-center items-center gap-4">
        <ThemeToggle/>
        <Navbar/>
      </div>
    </section>
  );
}

export default FullNavbar;