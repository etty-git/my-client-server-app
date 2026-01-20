import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post("http://localhost:7001/api/todos", {
        title,
        completed
      });
      console.log(data);
      setTitle("");
      setCompleted(false);
      navigate("/tasks");
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

   return (
    <form
      className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md flex flex-col gap-4"
      onSubmit={submitForm}
    >
      <input
        type="text"
        value={title}
        placeholder="Please add title"
        required
        onChange={(e) => setTitle(e.target.value)}
        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <label className="flex items-center gap-2 text-gray-700">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          className="w-5 h-5 accent-blue-600"
        />
        Completed
      </label>
      
      <button
        type="submit"
        disabled={title === ""}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        Send
      </button>
    </form>
  );
};

export default AddTask;
