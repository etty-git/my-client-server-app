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
    <form className="add-post-form" onSubmit={submitForm}>
      <input
        type="text"
        value={title}
        placeholder="Please add title"
        required
        onChange={(e) => setTitle(e.target.value)}
      />
       <textarea
    value={body}
    placeholder="Add body of the post"
    onChange={(e) => setbody(e.target.value)}
  />
      <button type="submit" disabled={title === ""}>Send</button>
    </form>
  );
}
export default AddPosts

