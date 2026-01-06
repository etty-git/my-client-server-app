
const Todos = require("../models/Todos");

const getAlltodos = async (req, res) => {
    const todo = await Todos.find().lean(); 
    if (!todo?.length) {
        return res.status(400).json({ message: 'no todos found' });
    }
    res.json(todo);
};

const gettodobyid = async (req, res) => {
    const { id } = req.params; 
    const todo = await Todos.findById(id); 
    if (!todo) {
        return res.status(404).json({ message: "todo not found" });
    }
    res.status(200).json(todo);
};
// const getchex = async (req, res) => {
//   try {
//     const completedTasks = await Todos.find({ completed: true });
//     res.json(completedTasks);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "שגיאה בשרת" });
//   }
// };


const creatnewtodo = async (req, res) => {
    const { title, tags,completed } = req.body;
    const todo = await Todos.create({ title, tags,completed });
    if (todo) {
        return res.status(201).json({ message: "new todo created" });
    } else {
        return res.status(400).json({ message: 'invalid todo' }); 
    }
};

const uodatetodo = async (req, res) => {
    const {id}=req.params
    const {  title, tags,completed } = req.body;
    if (!id) {
        return res.status(400).json({ message: "id is required" }); 
    }
    const todo = await Todos.findById(id); 
    if (!todo) {
        return res.status(400).json({ message: "todo not found" });
    }
    todo.title = title;
    todo.tags = tags;
    todo.completed=completed;
    const updatpost = await todo.save();
    res.json(`'${updatpost.title}' updated`);
};
const updatechex=async(req,res)=>{
try {
    const updated = await Todos.findByIdAndUpdate(
      req.params.id,
      { completed: req.body.completed },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "שגיאה בשרת" });
  }
}
const delittodo = async (req, res) => {
    const { id } = req.params; 
    const todo = await Todos.findById(id);
    if (!todo) {
        return res.status(400).json({ message: "todo not found" });
    }
    await todo.deleteOne(); 
    const replay = `todo '${todo.title}' deleted`;
    res.json(replay);
};



module.exports = { getAlltodos, gettodobyid, creatnewtodo, uodatetodo, delittodo ,updatechex};
