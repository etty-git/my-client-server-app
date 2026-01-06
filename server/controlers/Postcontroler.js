
const Post = require("../models/Post");

const getAllposts = async (req, res) => {
    const post = await Post.find().lean(); 
    if (!post?.length) {
        return res.status(400).json({ message: 'no posts found' });
    }
    res.json(post);
};

const getpostobyid = async (req, res) => {
    const { id } = req.params; 
    const post = await Post.findById(id); 
    if (!post) {
        return res.status(404).json({ message: "post not found" });
    }
    res.status(200).json(post);
};

const creatnewpost = async (req, res) => {
    const { title, body } = req.body;
    const post = await Post.create({ title, body });
    if (post) {
        return res.status(201).json({ message: "new post created" });
    } else {
        return res.status(400).json({ message: 'invalid post' }); 
    }
};

const uodatepost = async (req, res) => {
    const {id}=req.params
    const {  title, body } = req.body;
    if (!id) {
        return res.status(400).json({ message: "id is required" }); 
    }
    const post = await Post.findById(id); 
    if (!post) {
        return res.status(400).json({ message: "post not found" });
    }
    post.title = title;
    post.body = body;
    const updatpost = await post.save();
    res.json(`'${updatpost.title}' updated`);
};

const delitpost = async (req, res) => {
    const { id } = req.params; 
    const post = await Post.findById(id);
    if (!post) {
        return res.status(400).json({ message: "Post not found" });
    }
    await post.deleteOne(); 
    const replay = `post '${post.title}' deleted`;
    res.json(replay);
};
module.exports = { getAllposts, getpostobyid, creatnewpost, uodatepost, delitpost };
