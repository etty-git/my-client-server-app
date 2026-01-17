
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"
import PhotosItem from "./PhotosItem"

const PhotosList=()=>{
const[photos,setphotos]=useState([])
const fatchPhotos = async () => {
    const { data } = await Axios.get("http://localhost:7001/api/photos")
    setphotos(data)
  }
useEffect(() => {
    fatchPhotos()
  }, [])
  return<>
<div className="photos-list">

 <Link to="/photos/add">Add pohtos</Link>
 {photos.map(photo => (
          <PhotosItem key={photo._id} photo={photo} fatchPhotos={fatchPhotos}/>
        ))}
      </div>
</>

}
export default PhotosList