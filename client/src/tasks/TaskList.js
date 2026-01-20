import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"
import TaskItem from "./TaskItem"

const TaskList = () => {
  const [tasks, setStasks] = useState([])
  const [filterText, setFilterText] = useState("")
  const [limit, setlimit] = useState(false)

  const fatchTasks = async () => {
    const { data } = await Axios.get("http://localhost:7001/api/todos")
    setStasks(data)
  }

  useEffect(() => {
    fatchTasks()
  }, [])

  // סינון, מיון והגבלה
  const tasksToShow = tasks
    .filter(task =>
      task.title.toLowerCase().includes(filterText.toLowerCase())
    )
    .sort((a, b) => (a._id > b._id ? 1 : -1))
    .slice(0, limit ? 5 : tasks.length)

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      {/* כפתורים צמודים ושדה חיפוש */}
      <div className="flex items-center mb-4 gap-2">
        <div className="flex items-center gap-1">
          <Link
            to="/tasks/add"
            className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition-colors"
          >
            Add Task
          </Link>

          <button
            onClick={() => setlimit(!limit)}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition duration-200 shadow-md"
          >
            {limit ? "show all" : "show only the five"}
          </button>
        </div>

        <input
          type="text"
          placeholder="חפש משימה..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="ml-auto w-1/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {tasks.length === 0 ? (
        <h1 className="text-center text-gray-500 text-xl">Loading...</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-items-center">
          {tasksToShow.map(task => (
            <div key={task._id} className="aspect-square w-64">
              <TaskItem task={task} fatchTasks={fatchTasks} className="w-full h-full"/>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TaskList
