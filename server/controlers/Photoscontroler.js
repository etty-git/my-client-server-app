const Photos = require("../models/Photos");

const getAllphotos = async (req, res) => {
    const photo = await Photos.find().lean(); 
    if (!photo?.length) {
        return res.status(400).json({ message: 'no photos found' });
    }
    res.json(photo);
};
const getphotobyid = async (req, res) => {
    const { id } = req.params; 
    const photo = await Photos.findById(id); 
    if (!photo) {
        return res.status(404).json({ message: "photo not found" });
    }
    res.status(200).json(photo);
};

const creatnewphoto = async (req, res) => {
    const { title, imagurl } = req.body;
    const photo = await Photos.create({ title, imagurl });
    if (photo) {
        return res.status(201).json({ message: "new photo created" });
    } else {
        return res.status(400).json({ message: 'invalid photo' }); 
    }
};

const uodatephoto = async (req, res) => {
    const {id}=req.params
    const {  title, imagurl } = req.body;
    if (!id) {
        return res.status(400).json({ message: "id is required" }); 
    }
    const photo = await Photos.findById(id); 
    if (!photo) {
        return res.status(400).json({ message: "photo not found" });
    }
    photo.title = title;
    photo.imagurl = imagurl;
    const updatphoto = await photo.save();
    res.json(`'${updatphoto.title}' updated`);
};

const delitphoto = async (req, res) => {
    const { id } = req.params; 
    const photo = await Photos.findById(id);
    if (!photo) {
        return res.status(400).json({ message: "photo not found" });
    }
    await photo.deleteOne(); 
    const replay = `photo '${photo.title}' deleted`;
    res.json(replay);
};

const apdatcomplete = async (req, res) => {
    const { id } = req.params; 
    const photo = await Photos.findById(id);
    if (!photo) {
        return res.status(400).json({ message: "photo not found" });
    }
    photo.completed = true; 
    const updatephoto = await photo.save();
    res.json(`'${updatephoto.name}' updated`);
};

module.exports = { getAllphotos, getphotobyid, creatnewphoto, uodatephoto, delitphoto, apdatcomplete };
