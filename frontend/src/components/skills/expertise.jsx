export const Expertise = () => {
  const skills = [
    { name: "Frontend Development", percent: 90, color: "bg-fuchsia-500" },
    { name: "React & Ecosystem", percent: 85, color: "bg-blue-500" },
    { name: "Backend (Node/Express)", percent: 70, color: "bg-green-500" },
    { name: "UI/UX Design", percent: 75, color: "bg-purple-500" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-6">Technical Proficiency</h2>
      
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-700 dark:text-gray-200">{skill.name}</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.percent}%</span>
            </div>
            
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
              <div 
                className={`h-full rounded-full ${skill.color} relative`}
                style={{ width: `${skill.percent}%` }}
              >
                {/* Shine effect on the bar */}
                <div className="absolute top-0 right-0 bottom-0 w-full bg-gradient-to-l from-white/30 to-transparent"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
         <h3 className="font-bold mb-4 text-gray-800 dark:text-gray-200">Tools I use daily:</h3>
         <div className="flex flex-wrap gap-2">
            {["VS Code", "Figma", "Postman", "Vercel", "Git/GitHub", "Linux"].map((tool) => (
              <span key={tool} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full font-medium">
                {tool}
              </span>
            ))}
         </div>
      </div>
    </div>
  );
};