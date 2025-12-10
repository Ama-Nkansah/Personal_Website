import { Github, ExternalLink, Code2, Terminal, Cpu } from "lucide-react";
import { Expertise } from "../components/skills/expertise"; // Ensure you import the refactored versions below
import { Projects } from "../components/skills/projects";
import { Experience } from "../components/skills/experience";
import { TechBadge } from "../components/skills/techbadge";
import { GithubCTA} from "../components/skills/github-cta";

export const Stack = () => {
  return (
    <div className="min-h-screen bg-fuchsia-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-x-hidden transition-colors duration-300">
      
      <div className="container mx-auto px-6 py-20 md:pt-28 md:pb-18">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-3xl mt-5 mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            My Skills & <span className="text-fuchsia-600 dark:text-fuchsia-400">Expertise</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            A comprehensive overview of my technical journey, the projects I've built, and the professional value I bring to the table.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-24 bg-fuchsia-500 rounded-full"></div>
          </div>
        </div>

        {/* --- Tech Stack Grid (Glass Badges) --- */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200">
            Tech Ecosystem
          </h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <TechBadge name="JavaScript" icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            <TechBadge name="React" icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            <TechBadge name="Next.js" icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
            <TechBadge name="TypeScript" icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
            <TechBadge name="Tailwind" icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
            <TechBadge name="Node.js" icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
            <TechBadge name="Python" icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
            <TechBadge name="Git" icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
            <TechBadge name="AWS" icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
            <TechBadge name="SQL" icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
            <TechBadge name="Express" icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
          </div>
        </div>

        {/* --- Projects Section --- */}
        <Projects />
        <GithubCTA />

        {/* --- Experience & Expertise Split --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-24">
           <Experience />
           <Expertise />
        </div>

        {/* --- "Always Evolving" Banner --- */}
        <div className="mt-24 relative overflow-hidden rounded-3xl bg-gray-900 dark:bg-fuchsia-950 text-white p-10 md:p-16 text-center shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <Cpu className="mx-auto text-fuchsia-400 mb-6 w-12 h-12" />
            <h2 className="text-3xl font-bold mb-4">Always Evolving</h2>
            <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
              I'm currently diving deep into <span className="text-fuchsia-300 font-semibold">AI Models</span> and <span className="text-fuchsia-300 font-semibold">Advanced Animations</span>. 
              My goal is to bridge the gap between complex backend logic and beautiful, fluid frontend experiences.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
