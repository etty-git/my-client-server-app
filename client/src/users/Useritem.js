
import { MdDelete, MdEdit } from "react-icons/md"
import { useState } from "react"
import Axios from "axios";
const Useritem=({ user, fatchUser })=>{
const [isEdit, setIsEdit] = useState(false)
const [name, setname] = useState(user.name)
const [username, setusername] = useState(user.username)
const [phone, setphone] = useState(user.phone)
const [email, setemail] = useState(user.email)
const handleDelete = async () => {
        await Axios.delete(`http://localhost:7001/api/users/${user._id}`)
        fatchUser()
    }
    const saveUser = async () => {
    await Axios.put(`http://localhost:7001/api/users/${user._id}`, {
      name,
      username,
      phone,
      email,
      address: user.address
    });
    setIsEdit(false);
    fatchUser();
  };
  return (
    <div className="user-item">
      {isEdit ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Edit name"
            className="user-input"
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="Edit username"
            className="user-input"
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            placeholder="Edit phone"
            className="user-input"
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Edit email"
            className="user-input"
          />
          <button onClick={saveUser}>Save</button>
        </>
      ) : (
        <>
          <span className="user-name">{user.name}</span>
          <span className="user-phone">{user.phone}</span>
          <span className="user-email">{user.email}</span>
          <span className="user-username">{user.username}</span>

          <button className="btn edit" onClick={() => setIsEdit(true)}>
            <MdEdit />
          </button>
          <button className="btn delete" onClick={handleDelete}>
            <MdDelete />
          </button>
        </>
      )}
    </div>
  );
}
export default Useritem