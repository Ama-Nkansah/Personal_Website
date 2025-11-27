import {CodeXml} from "lucide-react";
import { Link } from 'react-router-dom';

export const Logo = () => { 
  return (
<div className="md:-translate-y-8 md:flex md:items-center mt-1 md:mt-0 md:px-4 gap-2">
      <Link to="/" className="flex items-center gap-1 dark:text-fuchsia-200">
        <span>
          <span className="text-xl md:text-2xl text-glow text-foreground stroke-black text-shadow-lg/20 text-shadow-fuchsia-400 dark:text-shadow-none" style={{ fontFamily: "Rubik Bubbles, system-ui", fontStyle:"normal" }}>
            Ama
          </span> <CodeXml className="inline-block"/> 
        </span>
      </Link>
    </div>
    )}
