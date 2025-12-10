export const TechBadge = ({ name, icon }) => (
  <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
    <img src={icon} alt={name} className="w-6 h-6 md:w-8 md:h-8" />
    <span className="font-medium text-sm md:text-base">{name}</span>
  </div>
);