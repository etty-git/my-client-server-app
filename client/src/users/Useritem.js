
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
    <div className="user-item bg-white p-4 rounded-xl shadow-md mb-4 flex items-center justify-between space-x-4">
      {isEdit ? (
        <div className="flex flex-col w-full space-y-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Edit name"
            className="border border-gray-300 rounded-lg px-3 py-2"
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="Edit username"
            className="border border-gray-300 rounded-lg px-3 py-2"
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            placeholder="Edit phone"
            className="border border-gray-300 rounded-lg px-3 py-2"
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Edit email"
            className="border border-gray-300 rounded-lg px-3 py-2"
          />
          <button
            onClick={saveUser}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 transition"
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <div className="flex-1">
            <p className="font-semibold text-gray-800">name-{user.name}</p>
            <p className="text-gray-500">username-{user.username}</p>
            <p className="text-gray-500">email-{user.email}</p>
            <p className="text-gray-500">phone-{user.phone}</p>
            <p className="text-gray-500">-city-{user.address.city}</p>
            <p className="text-gray-500">street-{user.address.street}</p>


          </div>
          <div className="flex space-x-2">
            <button
              className="btn edit text-blue-600 hover:text-blue-400 transition"
              onClick={() => setIsEdit(true)}
            >
              <MdEdit size={20} />
            </button>
            <button
              className="btn delete text-red-600 hover:text-red-400 transition"
              onClick={handleDelete}
            >
              <MdDelete size={20} />
            </button>
          </div>
        </>
      )}
    </div>
  )
}
export default Useritem