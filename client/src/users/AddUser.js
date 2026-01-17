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
    <form className="add-user-form" onSubmit={submitForm}>
      <input
        type="text"
        value={name}
        placeholder="Please add user"
        required
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="text"
        value={username}
        placeholder="Please add uusername"
        required
        onChange={(e) => setusername(e.target.value)}
      />
      <input
        type="text"
        value={email}
        placeholder="Please add your email"
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="text"
        value={phone}
        placeholder="Please addyour phone number"
        onChange={(e) => setphone(e.target.value)}
      />
     <input
  type="text"
  placeholder="City"
  value={address.city}
  onChange={(e) =>
    setaddress({
      ...address,
      city: e.target.value
    })
  }
/>
<input
  type="text"
  placeholder="Street"
  value={address.street}
  onChange={(e) =>
    setaddress({
      ...address,
      street: e.target.value
    })
  }
/>

  
      <button type="submit" disabled={username === ""}>Send</button>
    </form>
  );
}
export default AddUser