
import { MdDelete, MdEdit } from "react-icons/md"
import { useState } from "react"
import Axios from "axios";
const TaskItem = ({ task, fatchTasks }) => {

    const [isEdit, setIsEdit] = useState(false)
    const [title, setTitle] = useState(task.title)

    const handleDelete = async () => {
        await Axios.delete(`http://localhost:7001/api/todos/${task._id}`)
        fatchTasks()
    }

    // ✅ checkbox פשוט – עדכון מיידי, רק completed
    const toggleCompleted = async (checked) => {
        try {
            await Axios.put(
                `http://localhost:7001/api/todos/${task._id}/completed`, // נפרד כדי לעדכן רק completed
                { completed: checked }
            )
            fatchTasks()
        } catch (err) {
            console.error("Error updating completed:", err)
        }
    }

    // שמירת כותרת אוטומטית
    const saveTitle = async () => {
        await Axios.put(
            `http://localhost:7001/api/todos/${task._id}`,
            { title }
        )
        setIsEdit(false)
        fatchTasks()
    }

    return  <div className="bg-white shadow-md rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="w-5 h-5 accent-blue-600"
          checked={task.completed}
          onChange={(e) => toggleCompleted(e.target.checked)}
        />

        {isEdit ? (
          <input
            type="text"
            className="border-b border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 px-2 py-1 text-lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={saveTitle}
            autoFocus
          />
        ) : (
          <span
            className={`text-gray-800 text-lg font-medium ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {task.title}
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 text-gray-500 text-lg">
        {!isEdit && (
          <button
            className="hover:text-blue-600 transition-colors"
            onClick={() => setIsEdit(true)}
          >
            <MdEdit />
          </button>
        )}
        <button
          className="hover:text-red-500 transition-colors"
          onClick={handleDelete}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  
}

export default TaskItem
