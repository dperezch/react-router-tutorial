import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>error...</p>;

  return (
    <>
      <h1>Blog</h1>
      <ul className="list-group">
        {data.map((item) => (
          <Link to={`/blog/${item.id}`} key={item.id} className="list-group-item">
            {item.id} - {item.title}
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Blog;
