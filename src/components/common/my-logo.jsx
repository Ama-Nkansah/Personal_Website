import {CodeXml} from "lucide-react";
import { Link } from 'react-router-dom';

export const Logo = () => { 
  return (
<div className="container -translate-y-8 flex items-center px-4 gap-2">
      <Link to="/" className="text-xl font-medium flex items-center gap-1 dark:text-fuchsia-200">
        <span>
          <span className="text-glow text-foreground stroke-black text-shadow-lg/20 text-shadow-fuchsia-400 dark:text-shadow-none" style={{ fontFamily: "Rubik Bubbles, system-ui", fontSize: '24px', fontStyle:"normal" }}>Ama </span> <CodeXml className="inline-block"/> 
        </span>
      </Link>
    </div>
    )}
