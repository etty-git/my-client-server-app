import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';


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
    <form className="add-task-form" onSubmit={submitForm}>
      <input
        type="text"
        value={title}
        placeholder="Please add title"
        required
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        Completed
      </label>
      
      <button type="submit" disabled={title === ""}>Send</button>
    </form>
  );
};

export default AddTask;
