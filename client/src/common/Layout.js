import { Outlet } from "react-router-dom"
import Navigate from "./Navigate"
const Layout=()=>{
return<div className="page">
    <header><Navigate /></header>
    <main><Outlet /></main>
    <footer>footer</footer>
</div>
}
export default Layout