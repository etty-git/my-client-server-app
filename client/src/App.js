
import './App.css';
import AddTask from './tasks/AddTask';
import AddUser from './users/AddUser'
import TaskList from './tasks/TaskList';
import PostList from './posts/PostList'
import Layout from './common/Layout';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import AddPosts from './posts/AddPost';
import UsersList from './users/UsersList';
import PhotosList from './photos/PhotosList';
import AddPhotos from'./photos/AddPhotos'
import Homepage from './Homepage';
function App() {
  return (
     <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-200 flex flex-col">
     <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />}/>
        <Route path='/tasks' element={<TaskList />}/>
        <Route path='/tasks/add' element={<AddTask />}/>
        <Route path='/post/add' element={<AddPosts/>}/>
        <Route path='/users' element={<UsersList/>}/>
        <Route path='/users/add' element={<AddUser/>}/>
        <Route path='/posts' element={<PostList />}/>
        <Route path='/photos' element={<PhotosList />}/>
        <Route path='/photos/add' element={<AddPhotos />}/>





        </Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
