const express=require("express")
const router=express.Router()
const Photos=require("../models/Photos")

const{ getAllphotos, getphotobyid, creatnewphoto, uodatephoto, delitphoto, apdatcomplete }=require("../controlers/Photoscontroler")

router.get("/", getAllphotos);

router.get("/:id", getphotobyid);

router.post("/", creatnewphoto);


router.put("/:id", uodatephoto);


router.delete("/:id", delitphoto);
router.patch("/:id/complete", apdatcomplete);
module.exports = router;
