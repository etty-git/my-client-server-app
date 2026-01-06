const express=require("express")
const router=express.Router()
const Users=require("../models/Users")
const{getAllusers, getuseryid, creatnewuser, uodatetuser, delituser}=require("../controlers/Userscontroler")

router.get("/", getAllusers);

router.get("/:id", getuseryid);

router.post("/", creatnewuser);


router.put("/:id", uodatetuser);


router.delete("/:id", delituser);


module.exports = router;
