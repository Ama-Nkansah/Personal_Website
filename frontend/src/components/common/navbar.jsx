import {Navbar} from "../common/menu.jsx";
import { ThemeToggle } from "../home/ThemeToggle.jsx";
import { Logo } from "./my-logo.jsx";


const FullNavbar = ()=>{
  return(
    <section className="pt-4 pb-8 mx-4 md:hidden flex flex-row justify-between">
        <Logo/>
        <ThemeToggle/>
        <Navbar/>
    </section>
  );
}

export default FullNavbar;