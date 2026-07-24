const express=require("express");

const router=express.Router();

const {

latestAssessment,

history

}=require("../controllers/assessmentController");

const auth=require("../middleware/authMiddleware");

router.get(

"/latest",

auth,

latestAssessment

);

router.get(

"/history",

auth,

history

);

module.exports=router;