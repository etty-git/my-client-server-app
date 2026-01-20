import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddUser=()=>{
const [name, setname] = useState("");
const [username, setusername] = useState("");
const [email,setemail]=useState("")
const[phone,setphone]=useState("")
const[address,setaddress]=useState({
  city: "",
  street: ""
})
const navigate = useNavigate();
const submitForm = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post("http://localhost:7001/api/users", {
        name,
        username,
        email,
        phone,
        address
      });
      console.log(data);
      setname("");
      setusername("")
      setemail("")
      setphone("")
      setaddress({ city: "", street: "" });
      navigate("/users");
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  return (
    <form className="add-user-form max-w-md mx-auto p-6 bg-white rounded-xl shadow-md flex flex-col space-y-3" onSubmit={submitForm}>
      <input
        type="text"
        value={name}
        placeholder="Please add name"
        required
        onChange={(e) => setname(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2"
      />
      <input
        type="text"
        value={username}
        placeholder="Please add username"
        required
        onChange={(e) => setusername(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2"
      />
      <input
        type="text"
        value={email}
        placeholder="Please add email"
        onChange={(e) => setemail(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2"
      />
      <input
        type="text"
        value={phone}
        placeholder="Please add phone number"
        onChange={(e) => setphone(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2"
      />
      <input
        type="text"
        placeholder="City"
        value={address.city}
        onChange={(e) => setaddress({ ...address, city: e.target.value })}
        className="border border-gray-300 rounded-lg px-3 py-2"
      />
      <input
        type="text"
        placeholder="Street"
        value={address.street}
        onChange={(e) => setaddress({ ...address, street: e.target.value })}
        className="border border-gray-300 rounded-lg px-3 py-2"
      />
      <button
        type="submit"
        disabled={username === ""}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
      >
        Send
      </button>
    </form>
  );
}
export default AddUser