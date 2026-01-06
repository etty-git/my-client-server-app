
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

    return (
        <div className="task-item">
            <input
                type="checkbox"
                className="task-checkbox"
                checked={task.completed}
                onChange={(e) => toggleCompleted(e.target.checked)}
            />

            {isEdit ? (
                <input
                    type="text"
                    className="task-input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onBlur={saveTitle}
                    autoFocus
                />
            ) : (
                <>
                    <span
                        className={
                            task.completed
                                ? "task-title completed"
                                : "task-title"
                        }
                    >
                        {task.title}
                    </span>

                    <button
                        className="btn edit"
                        onClick={() => setIsEdit(true)}
                    >
                        <MdEdit />
                    </button>
                </>
            )}

            <button className="btn delete" onClick={handleDelete}>
                <MdDelete />
            </button>
        </div>
    )
}

export default TaskItem
