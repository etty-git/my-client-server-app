import { MdDelete, MdEdit } from "react-icons/md";
import { useState } from "react";
import Axios from "axios";
const PhotosItem=({photo, fatchPhotos} )=>{
const [isEdit, setIsEdit] = useState(false);
const [title, setTitle] = useState(photo.title);
const[imagurl,seturl]=useState(photo.imagurl)
const handleDelete = async () => {
    await Axios.delete(`http://localhost:7001/api/photos/${photo._id}`);
    fatchPhotos();
  };
const savePhoto = async () => {
    await Axios.put(`http://localhost:7001/api/photos/${photo._id}`, {
      title,
      imagurl
    });
    setIsEdit(false);
    fatchPhotos();
  };
  return (
    <div className="photos-item">
      {isEdit ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Edit title"
            className="post-input"
          />
           <input
            type="text"
            value={imagurl}
            onChange={(e) => seturl(e.target.value)}
            placeholder="Edit url"
            className="url-input"
          />
         
          
          <button onClick={savePhoto}>Save</button>
        </>
      ) : (
        <>
          <span className="photo-title">{photo.title}</span>
          <img src={photo.imagurl} alt={photo.title} className="photo-img" />

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
export default PhotosItem