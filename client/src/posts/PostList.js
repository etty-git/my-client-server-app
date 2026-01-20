// PostList.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Postitem from "./Postitem";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [limit, setLimit] = useState(false);

  const fetchPosts = async () => {
    const { data } = await Axios.get("http://localhost:7001/api/post");
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const postsToShow = posts
    .filter(post =>
      post.title.toLowerCase().includes(filterText.toLowerCase())
    )
    .sort((a, b) => (a._id > b._id ? 1 : -1))
    .slice(0, limit ? 5 : posts.length);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4 gap-2">
        <div className="flex gap-1">
          <Link
            to="/post/add"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
          >
            Add Post
          </Link>
          <button
            onClick={() => setLimit(!limit)}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition duration-200 shadow-md"
          >
            {limit ? "show all" : "show only the five"}
          </button>
        </div>
        <input
          type="text"
          placeholder="Search a post..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {posts.length === 0 ? (
        <h1 className="text-center text-gray-500 mt-10">Loading...</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-items-center">
          {postsToShow.map((post) => (
            <Postitem key={post._id} post={post} fetchPosts={fetchPosts} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
