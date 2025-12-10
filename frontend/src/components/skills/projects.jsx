import { Github, ExternalLink } from "lucide-react";

export const Projects = () => {
  // Dummy Data - Replace with your actual info
  const projects = [
    {
      title: "Promptly",
      desc: "A full-stack application leveraging OpenAI's API to help users generate blog posts. Built with React, Node.js, and Tailwind.",
      image: "/assets/promptly.png",
      liveLink: "https://promptly-sand.vercel.app/",

    },
    {
      title: "Colink",
      desc: "A responsive admin dashboard featuring real-time data visualization, order management, and dark mode support.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      liveLink: "#",
    },
    {
      title: "My Website",
      desc: "My previous personal site showing my progression in UI/UX design. Features custom CSS animations and form handling.",
      image: "/assets/portfolio.png",
      liveLink: "https://ama-nkansahdev.vercel.app",
    }
  ];

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-10 text-center md:text-left border-l-4 border-fuchsia-500 pl-4">
        Featured Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            
            {/* Image Container */}
            <div className="relative overflow-hidden h-48 w-full">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                 {/* Overlay Buttons */}
                 <a href={project.liveLink} className="p-2 bg-fuchsia-600 rounded-full text-white hover:bg-fuchsia-700"><ExternalLink size={20}/></a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 group-hover:text-fuchsia-600 transition-colors">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                {project.desc}
              </p>
              
              <div className="flex gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                <a href={project.liveLink} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 hover:text-fuchsia-600">
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};