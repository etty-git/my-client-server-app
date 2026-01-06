const express=require("express")
const router=express.Router()
const Post=require("../models/Post")

const{ getAllposts, getpostobyid, creatnewpost, uodatepost, delitpost}=require("../controlers/Postcontroler")

router.get("/", getAllposts);
router.get("/:id", getpostobyid);

router.post("/", creatnewpost);

router.put("/:id", uodatepost);


router.delete("/:id", delitpost);

module.exports = router;
