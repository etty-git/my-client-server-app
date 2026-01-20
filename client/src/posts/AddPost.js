import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPosts=()=>{
const [title, setTitle] = useState("");
const [body, setbody] = useState("");
const navigate = useNavigate();
 const submitForm = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post("http://localhost:7001/api/post", {
        title,
        body
      });
      console.log(data);
      setTitle("");
      setbody("")
      navigate("/posts");
    } catch (err) {
      console.error("Error adding post:", err);
    }
  };

  return (
    <form
      className="add-post-form max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col space-y-4"
      onSubmit={submitForm}
    >
      <h2 className="text-2xl font-bold text-indigo-700 text-center">Add a New Post</h2>

      <input
        type="text"
        value={title}
        placeholder="Please add title"
        required
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      <textarea
        value={body}
        placeholder="Add body of the post"
        onChange={(e) => setbody(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      <button
        type="submit"
        disabled={title === ""}
        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition disabled:opacity-50"
      >
        Send
      </button>
    </form>
  );
   

}
export default AddPosts

