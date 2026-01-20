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
    <form
      className="add-photos-form max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md flex flex-col space-y-3"
      onSubmit={submitForm}
    >
      <input
        type="text"
        value={title}
        placeholder="Please add title"
        required
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2"
      />
      <input
        type="text"
        value={imagurl}
        placeholder="Please add url"
        required
        onChange={(e) => seturl(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2"
      />
      <button
        type="submit"
        disabled={title === "" && imagurl === ""}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition"
      >
        Send
      </button>
    </form>
  );
   
}
export default AddPhotos