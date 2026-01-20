import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"
import Useritem from './Useritem'

const UsersList = () => {
  const [users, setusers] = useState([])
  const [filterText, setFilterText] = useState("")
  const [limit, setlimit] = useState(false)

  const fatchUser = async () => {
    const { data } = await Axios.get("http://localhost:7001/api/users")
    setusers(data)
  }

  useEffect(() => {
    fatchUser()
  }, [])

  const usersToShow = users
    .filter(user =>
      user.name.toLowerCase().includes(filterText.toLowerCase()) ||
      (user.username && user.username.toLowerCase().includes(filterText.toLowerCase())) ||
      (user.email && user.email.toLowerCase().includes(filterText.toLowerCase())) ||
      (user.phone && user.phone.toLowerCase().includes(filterText.toLowerCase()))
    )
    .sort((a, b) => (a._id > b._id ? 1 : -1))
    .slice(0, limit ? 5 : users.length)

  return (
    <div className="users-list max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        
        {/* כפתור Add */}
        <Link
          to="/users/add"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
        >
          Add User
        </Link>

        {/* שני הכפתורים הצמודים */}
        <div className="flex items-center">
          <button
            onClick={() => setlimit(!limit)}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition duration-200 shadow-md"
          >
            {limit ? "show all" : "show only the five"}
          </button>
        </div>

        {/* שדה חיפוש נשאר בנפרד */}
        <input
          type="text"
          placeholder="Search a user..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {users.length === 0 ? (
        <h1 className="text-center text-gray-500 mt-10">Loading...</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {usersToShow.map((user) => (
            <div key={user._id} className="aspect-square">
              <Useritem user={user} fatchUser={fatchUser} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default UsersList
