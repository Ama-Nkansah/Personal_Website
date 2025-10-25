import { useList } from "@refinedev/core";
import { Link } from "react-router-dom";

export default function BlogList() {
  const { data, isLoading } = useList({ resource: "blogs" });

  if (isLoading) return <p>Loading blogs...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">All Blogs</h2>
      <Link to="/blog/new" className="btn btn-primary mb-4">
        Create New Blog
      </Link>
      {data?.data.map((blog) => (
        <div key={blog.id} className="mb-4 p-2 border rounded">
          <Link to={`/blog/${blog.id}`}>
            <h3 className="text-xl font-semibold">{blog.title}</h3>
          </Link>
          <p>{blog.content.slice(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}

