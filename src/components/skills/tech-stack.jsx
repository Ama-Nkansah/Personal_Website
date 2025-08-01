import {Navbar} from "../common/Navbar";

export const Stack = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-fuchsia-300 text-gray-900 dark:bg-none dark:bg-[#21292c] dark:text-gray-100 overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Skills</h1>
        <p className="text-lg mb-4">Here are some of the skills I have acquired over the years:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>CSS and Tailwind CSS</li>
          <li>HTML</li>
          <li>Git and GitHub</li>
        </ul>
      </div>
    </div>
  );
}