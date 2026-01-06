const express=require("express")
const router=express.Router()
const Todos=require("../models/Todos")

const{getAlltodos, gettodobyid, creatnewtodo, uodatetodo, delittodo,updatechex}=require("../controlers/Todoscontroler")

router.get("/", getAlltodos);

router.get("/:id", gettodobyid);


router.post("/", creatnewtodo);

router.put("/:id/completed",updatechex)
router.put("/:id", uodatetodo);


router.delete("/:id", delittodo);


module.exports = router;
