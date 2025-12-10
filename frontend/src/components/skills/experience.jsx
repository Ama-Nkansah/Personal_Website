import { Briefcase } from "lucide-react";

export const Experience = () => {
  const jobs = [
    {
      role: "Frontend Engineer Intern",
      company: "Tech Innovators Ltd",
      duration: "2024 - Present",
      desc: "Developing responsive UI components using React and Tailwind. Improved site performance by 25% through image optimization."
    },
    {
      role: "Web Development Lead",
      company: "University CS Club",
      duration: "2023 - 2024",
      desc: "Mentored 30+ students in HTML/CSS/JS. Led the redesign of the club's portal using Next.js."
    },
    {
      role: "Freelance Developer",
      company: "Self-Employed",
      duration: "2022 - 2023",
      desc: "Delivered 5+ custom websites for local businesses. Managed deployment and SEO optimization."
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