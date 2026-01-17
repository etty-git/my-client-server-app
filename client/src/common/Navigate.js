import { NavLink } from "react-router-dom"

const Navigate=()=>{
return<div className="flex space-x-6 font-semibold text-gray-700">
  <NavLink className="hover:text-indigo-600 transition-colors duration-300" to="/">Home</NavLink>
      <NavLink className="hover:text-indigo-600 transition-colors duration-300" to="/tasks">Tasks List</NavLink>
      <NavLink className="hover:text-indigo-600 transition-colors duration-300" to="/posts">Posts List</NavLink>
      <NavLink className="hover:text-indigo-600 transition-colors duration-300" to="/users">Users List</NavLink>
      <NavLink className="hover:text-indigo-600 transition-colors duration-300" to="/photos">Photos List</NavLink>


</div>
}
export default Navigate



