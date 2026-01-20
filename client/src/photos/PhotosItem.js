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
    <div className="photos-item bg-white p-4 rounded-2xl shadow-md flex flex-col items-center space-y-3 hover:scale-105 transform transition-transform duration-300">
      {isEdit ? (
        <div className="flex flex-col w-full space-y-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Edit title"
            className="border border-gray-300 rounded-lg px-3 py-2"
          />
          <input
            type="text"
            value={imagurl}
            onChange={(e) => seturl(e.target.value)}
            placeholder="Edit url"
            className="border border-gray-300 rounded-lg px-3 py-2"
          />
          <button
            onClick={savePhoto}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 transition"
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <span className="font-semibold text-gray-800">{photo.title}</span>
          <img
            src={photo.imagurl}
            alt={photo.title}
            className="rounded-lg shadow-md w-full h-64 object-cover"
          />
          <div className="flex space-x-2 mt-2">
            <button
              className="text-blue-600 hover:text-blue-400 transition"
              onClick={() => setIsEdit(true)}
            >
              <MdEdit size={20} />
            </button>
            <button
              className="text-red-600 hover:text-red-400 transition"
              onClick={handleDelete}
            >
              <MdDelete size={20} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default PhotosItem