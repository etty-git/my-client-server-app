import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"
import Postitem from "./Postitem"
const PostList=()=>{
const[posts,setposts]=useState([])
const [filterText, setFilterText] = useState("")
const fatchPost = async () => {
    const { data } = await Axios.get("http://localhost:7001/api/post")
    setposts(data)
  }
 const filteredTasks = posts.filter((post) =>
    post.title.toLowerCase().includes(filterText.toLowerCase())
  )
  useEffect(() => {
    fatchPost()
  }, [])
return<>
<div className="post-list">

 <Link to="/post/add">Add post</Link>
<input
        type="text"
        placeholder="search a post"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}/>
      {posts.length === 0 ? (
        <h1>loading...</h1>
      ) : (
        [...filteredTasks] 
          .sort((a, b) => (a._id > b._id ? 1 : -1))
          .map((post) => (
            <Postitem
              key={post._id}
              post={post}
              fatchPost={fatchPost}
            />
          ))
      )}
</div>
</>
}
export default PostList