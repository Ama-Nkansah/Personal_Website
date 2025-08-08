export const Expertise = () => {
  return (
    <div className="flex items-center justify-center gap-5 mt-20 flex-wrap">

      {/* Technologies */}
      <div className="w-100 h-auto p-6 rounded-2xl backdrop-blur-md border-black/20 bg-black/20 dark:bg-black/50 border dark:border-white/20 shadow-md my-10">
        <h1 className="text-black dark:text-white font-semibold text-lg mb-5">Technologies</h1>

        {/* JavaScript */}
        <div className="mt-5">
          <div className="bg-gray-300 border border-black h-3 w-full rounded-full overflow-hidden">
            <div className="h-full bg-fuchsia-400 w-[90%]"></div>
          </div>
          <div className="flex justify-between text-sm text-black dark:text-white mt-1">
            <span>JavaScript</span>
            <span>90%</span>
          </div>
        </div>

        {/* React */}
        <div className="mt-5">
          <div className="bg-gray-300 border border-black h-3 w-full rounded-full overflow-hidden">
            <div className="h-full bg-fuchsia-400 w-[75%]"></div>
          </div>
          <div className="flex justify-between text-sm text-black dark:text-white mt-1">
            <span>React</span>
            <span>75%</span>
          </div>
        </div>

        {/* HTML */}
        <div className="mt-5">
          <div className="bg-gray-300 border border-black h-3 w-full rounded-full overflow-hidden">
            <div className="h-full bg-fuchsia-400 w-[60%]"></div>
          </div>
          <div className="flex justify-between text-sm text-black dark:text-white mt-1">
            <span>HTML</span>
            <span>60%</span>
          </div>
        </div>

        {/* CSS */}
        <div className="mt-5">
          <div className="bg-gray-300 border border-black h-3 w-full rounded-full overflow-hidden">
            <div className="h-full bg-fuchsia-400 w-[80%]"></div>
          </div>
          <div className="flex justify-between text-sm text-black dark:text-white mt-1">
            <span>Node/Express.JS</span>
            <span>80%</span>
          </div>
        </div>
      </div>

      {/* Development Tools */}
      <div className="w-100 h-auto p-6 rounded-2xl backdrop-blur-md border-black/20 bg-black/20 dark:bg-black/50 border dark:border-white/20 shadow-md my-10">
        <h1 className="text-black dark:text-white font-semibold text-lg mb-5">Development Tools</h1>

        {/* VS Code */}
        <div className="mt-5">
          <div className="bg-gray-300 border border-black h-3 w-full rounded-full overflow-hidden">
            <div className="h-full bg-fuchsia-400 w-[95%]"></div>
          </div>
          <div className="flex justify-between text-sm text-black dark:text-white mt-1">
            <span>VS Code</span>
            <span>95%</span>
          </div>
        </div>

        {/* Git */}
        <div className="mt-5">
          <div className="bg-gray-300 border border-black h-3 w-full rounded-full overflow-hidden">
            <div className="h-full bg-fuchsia-400 w-[55%]"></div>
          </div>
          <div className="flex justify-between text-sm text-black dark:text-white mt-1">
            <span>AWS</span>
            <span>55%</span>
          </div>
        </div>

        {/* GitHub */}
        <div className="mt-5">
          <div className="bg-gray-300 border border-black h-3 w-full rounded-full overflow-hidden">
            <div className="h-full bg-fuchsia-400 w-[90%]"></div>
          </div>
          <div className="flex justify-between text-sm text-black dark:text-white mt-1">
            <span>Git & GitHub</span>
            <span>70%</span>
          </div>
        </div>

        {/* Terminal */}
        <div className="mt-5">
          <div className="bg-gray-300 border border-black h-3 w-full rounded-full overflow-hidden">
            <div className="h-full bg-fuchsia-400 w-[70%]"></div>
          </div>
          <div className="flex justify-between text-sm text-black dark:text-white mt-1">
            <span>Terminal</span>
            <span>70%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
