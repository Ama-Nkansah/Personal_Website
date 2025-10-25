import { Outlet } from "react-router-dom";

// BlogLayout component
export const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-fuchsia-300 text-gray-900 dark:bg-none dark:bg-[#21292c] dark:text-gray-100 overflow-x-hidden" id="blog">
      <h1>My Blog Section</h1>
      <Outlet /> {/* Nested routes will render here */}
    </div>
  );
};

