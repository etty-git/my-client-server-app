import { MdDelete, MdEdit } from "react-icons/md";
import { useState } from "react";
import Axios from "axios";

const Postitem = ({ post, fatchPost }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleDelete = async () => {
    await Axios.delete(`http://localhost:7001/api/post/${post._id}`);
    fatchPost();
  };

  // 🔹 שמירת הפוסט אחרי עריכה
  const savePost = async () => {
    await Axios.put(`http://localhost:7001/api/post/${post._id}`, {
      title,
      body
    });
    setIsEdit(false);
    fatchPost();
  };

  return (
    <div className="post-item">
      {isEdit ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Edit title"
            className="post-input"
          />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Edit body"
            className="post-input"
          />
          <button onClick={savePost}>Save</button>
        </>
      ) : (
        <>
          <span className="post-title">{post.title}</span>
          <span className="post-body">{post.body}</span>
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
};

export default Postitem;
