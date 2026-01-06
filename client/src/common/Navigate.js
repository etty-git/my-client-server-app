import { NavLink } from "react-router-dom"

const Navigate=()=>{
return<div className="nav">
<NavLink to="/">home page</NavLink>
<NavLink to="/tasks">tasks list</NavLink>
<NavLink to="/posts">posts list</NavLink>
</div>
}
export default Navigate