const Assessment =
require("../models/Assessment");

const latestAssessment =
async(req,res)=>{

const assessment =
await Assessment.findOne({

user:req.user.id

}).sort({

createdAt:-1

});

res.json(assessment);

};

const history =
async(req,res)=>{

const assessments =
await Assessment.find({

user:req.user.id

}).sort({

createdAt:-1

});

res.json(assessments);

};

module.exports={
latestAssessment,
history
};