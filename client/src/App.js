
import './App.css';
import AddTask from './tasks/AddTask';
import TaskList from './tasks/TaskList';
import PostList from './posts/PostList'
import Layout from './common/Layout';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import AddPosts from './posts/AddPost';
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<h1>home page</h1>}/>
        <Route path='/tasks' element={<TaskList />}/>
        <Route path='/tasks/add' element={<AddTask />}/>
        <Route path='/post/add' element={<AddPosts/>}/>

        /post/add
        <Route path='/posts' element={<PostList />}/>


        </Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
