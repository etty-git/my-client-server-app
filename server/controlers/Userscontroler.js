
const Users = require("../models/Users");

const getAllusers = async (req, res) => {
    const user = await Users.find().lean(); 
    if (!user?.length) {
        return res.status(400).json({ message: 'no users found' });
    }
    res.json(user);
};

const getuseryid = async (req, res) => {
    const { id } = req.params; 
    const user = await Users.findById(id); 
    if (!user) {
        return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json(user);
};

const creatnewuser = async (req, res) => {
    const { name, username,email,phone ,address } = req.body;
    const user = await Users.create({ name, username,email,phone , address: {
        city: address.city,
        street: address.street,
        houseNumber: address.houseNumber
      } });
    if (user) {
        return res.status(201).json({ message: "new user created" });
    } else {
        return res.status(400).json({ message: 'invalid user' }); 
    }
};

const uodatetuser = async (req, res) => {
    const {id}=req.params
    const { name, username,email,phone ,address } = req.body;
    if (!id) {
        return res.status(400).json({ message: "id is required" }); 
    }
    const user = await Users.findById(id); 
    if (!user) {
        return res.status(400).json({ message: "user not found" });
    }
    user.name=name
    user.username=username
    user.email=email
    user.phone=phone
    user.address= {
        city: address.city,
        street: address.street,
        houseNumber: address.houseNumber
      }
    const updatuser = await user.save();
    res.json(`'${updatuser.name}' updated`);
};

const delituser = async (req, res) => {
    const { id } = req.params; 
    const user = await Users.findById(id);
    if (!user) {
        return res.status(400).json({ message: "user not found" });
    }
    await user.deleteOne(); 
    const replay = `user '${user.name}' deleted`;
    res.json(replay);
};



module.exports = { getAllusers, getuseryid, creatnewuser, uodatetuser, delituser };
