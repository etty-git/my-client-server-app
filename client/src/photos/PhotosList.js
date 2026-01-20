
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"
import PhotosItem from "./PhotosItem"

const PhotosList=()=>{
const[photos,setphotos]=useState([])
const[limit,setlimit]=useState(false)
const photosShow = limit ? photos.slice(0, 5) : photos;
const fatchPhotos = async () => {
    const { data } = await Axios.get("http://localhost:7001/api/photos")
    setphotos(data)
  }
useEffect(() => {
    fatchPhotos()
  }, [])
   return (
    <div className="photos-list max-w-5xl mx-auto p-4">
      <div className="flex justify-end mb-4">
        <Link
          to="/photos/add"
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition"
        >
          Add Photo
        </Link>
        <button onClick={() => setlimit(!limit)} className="
    px-4 py-2
    ml-2
    bg-gray-700 text-white
    rounded-lg
    hover:bg-gray-600
    transition
    duration-200
    shadow-md
  ">{limit?"show all":"show only the five"}</button>

      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {photos.length === 0 ? (
          <h1 className="text-center text-gray-500 mt-10">Loading...</h1>
        ) : (
          photosShow.map((photo) => (
            <PhotosItem key={photo._id} photo={photo} fatchPhotos={fatchPhotos} />
          ))
        )}
      </div>
    </div>
  );

}
export default PhotosList