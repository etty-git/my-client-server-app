import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPhotos=()=>{
const [title, setTitle] = useState("");
const[imagurl,seturl]=useState("")
const navigate = useNavigate();
 const submitForm = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post("http://localhost:7001/api/photos", {
        title,
         imagurl
      });
      console.log(data);
      setTitle("");
      seturl("")
      navigate("/photos");
    } catch (err) {
      console.error("Error adding photo:", err);
    }
  };
  
  return (
    <form className="add-photos-form" onSubmit={submitForm}>
      <input
        type="text"
        value={title}
        placeholder="Please add title"
        required
        onChange={(e) => setTitle(e.target.value)}
      />
       <input
        type="text"
        value={imagurl}
        placeholder="Please add url"
        required
        onChange={(e) => seturl(e.target.value)}
      />
      <button type="submit" disabled={title === ""&&imagurl===""}>Send</button>
    </form>
  );
}
export default AddPhotos