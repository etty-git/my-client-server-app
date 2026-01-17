import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"
import Useritem from './Useritem'
const UsersList=()=>{
const[users,setusers]=useState([])
const [filterText, setFilterText] = useState("")
const fatchUser = async () => {
    const { data } = await Axios.get("http://localhost:7001/api/users")
    setusers(data)
  }
const filteredusers = users.filter((user) => 
  user.name.toLowerCase().includes(filterText.toLowerCase()) ||
  (user.username && user.username.toLowerCase().includes(filterText.toLowerCase())) ||
  (user.email && user.email.toLowerCase().includes(filterText.toLowerCase())) ||
  (user.phone && user.phone.toLowerCase().includes(filterText.toLowerCase()))
);

  useEffect(() => {
    fatchUser()
  }, [])
return<div className="users-list">
<Link to="/users/add">Add user</Link>
<input
        type="text"
        placeholder="search a user"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}/>
      {users.length === 0 ? (
        <h1>loading...</h1>
      ) : (
        [...filteredusers] 
          .sort((a, b) => (a._id > b._id ? 1 : -1))
          .map((user) => (
            <Useritem
              key={user._id}
              user={user}
              fatchUser={fatchUser}
            />
          ))
      )}
</div>
}
export default UsersList