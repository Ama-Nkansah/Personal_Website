import { Briefcase } from "lucide-react";

export const Experience = () => {
  const jobs =[
  {
    role: "Frontend Engineer Lead",
    company: "InnovaLink Solutions",
    duration: "2025 - Present",
    desc: "Leading the frontend team in building a client collaboration platform, creating scalable UI systems and smooth, user-focused experiences during my internship."
  },
  {
    role: "Frontend Developer",
    company: "CodeHive",
    duration: "2025 - Present",
    desc: "Developing responsive and scalable frontend websites while contributing to growing team projects and improving my engineering skills."
  },
  {
    role: "Frontend Developer (Contract)",
    company: "Kantatech Company",
    duration: "August 2025 - November 2025",
    desc: "Built a web application for agribusiness operations, focusing on clean interface design and efficient user workflows."
  }
];


  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <Briefcase className="text-fuchsia-600" /> Experience
      </h2>

      <div className="space-y-0">
        {jobs.map((job, index) => (
          <div key={index} className="relative pl-8 pb-12 border-l-2 border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
            {/* The Dot on the Timeline */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-fuchsia-500 ring-4 ring-white dark:ring-gray-900"></div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{job.role}</h3>
              <span className="text-xs font-semibold px-2 py-1 bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300 rounded-md w-fit mt-1 sm:mt-0">
                {job.duration}
              </span>
            </div>
            
            <h4 className="text-md font-medium text-gray-500 dark:text-gray-400 mb-3">{job.company}</h4>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
              {job.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};