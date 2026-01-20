// Postitem.jsx
import { MdDelete, MdEdit } from "react-icons/md";
import { useState } from "react";
import Axios from "axios";

const Postitem = ({ post, fetchPosts }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleDelete = async () => {
    await Axios.delete(`http://localhost:7001/api/post/${post._id}`);
    fetchPosts();
  };

  const savePost = async () => {
    await Axios.put(`http://localhost:7001/api/post/${post._id}`, {
      title,
      body
    });
    setIsEdit(false);
    fetchPosts();
  };

  return (
    <div className="post-item w-80 h-80 bg-white shadow-lg rounded-2xl p-4 mb-2 flex flex-col justify-between hover:shadow-2xl transition transform hover:-translate-y-1">
      {isEdit ? (
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Edit title"
            className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Edit body"
            className="border px-3 py-2 rounded-lg h-40 resize-none break-words focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={savePost}
            className="self-end px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-lg font-semibold mb-2 text-gray-800 break-words overflow-hidden">
            {post.title}
          </h2>
          <p className="text-gray-700 mb-2 break-words overflow-hidden">{post.body}</p>
          <div className="flex space-x-2 mt-auto">
            <button
              onClick={() => setIsEdit(true)}
              className="text-indigo-600 hover:text-indigo-500 transition"
            >
              <MdEdit size={20} />
            </button>
            <button
              onClick={handleDelete}
              className="text-red-600 hover:text-red-500 transition"
            >
              <MdDelete size={20} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Postitem;
