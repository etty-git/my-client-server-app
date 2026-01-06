
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"
import TaskItem from "./TaskItem"

const TaskList = () => {
  const [tasks, setStasks] = useState([])
  const [filterText, setFilterText] = useState("") // 🔹 כאן שדה החיפוש

  const fatchTasks = async () => {
    const { data } = await Axios.get("http://localhost:7001/api/todos")
    setStasks(data)
  }

  useEffect(() => {
    fatchTasks()
  }, [])

  // 🔹 סינון המשימות לפי הטקסט
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(filterText.toLowerCase())
  )

  return (
    <div className="task-list">
      <Link to="/tasks/add">Add Task</Link>

      {/* 🔹 input לחיפוש */}
      <input
        type="text"
        placeholder="חפש משימה..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        
      />

      {tasks.length === 0 ? (
        <h1>loading...</h1>
      ) : (
        [...filteredTasks] // משתמשים ב-filteredTasks במקום tasks
          .sort((a, b) => (a._id > b._id ? 1 : -1))
          .map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              fatchTasks={fatchTasks}
            />
          ))
      )}
    </div>
  )
}

export default TaskList
