import { CodeXml } from "lucide-react";
import { Link } from "react-router-dom";

export const Logo = () => { 
  return (
    <div className="fixed top-6 left-6 md:top-8 md:left-10">
      <Link to="/" className="flex items-center dark:text-fuchsia-200">
          <span
            className="text-xl md:text-2xl text-glow text-foreground stroke-black text-shadow-lg/20 text-shadow-fuchsia-400 dark:text-shadow-none"
            style={{ fontFamily: "Rubik Bubbles, system-ui", fontStyle: "normal" }}
          >
            Ama
          </span>
          <CodeXml className="md:ml-2 inline-block" />
      </Link>
    </div>
  );
};
