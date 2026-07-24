const mongoose = require("mongoose");

const assessmentSchema = new mongoose.Schema(

{

user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User",
required:true
},

age:Number,

height:Number,

weight:Number,

bmi:Number,

condition:String,

severity:String,

risk_category:String,

overall_wellness_score:Number,

recommended_mudra:String,

mudra_duration_minutes:Number,

mudra_frequency_per_day:Number,

recommended_reflexology_point:String,

reflexology_duration_minutes:Number,

recommended_foods:String,

foods_to_avoid:String,

personalized_recommendation:String,

cycle_regularity:String,

cycle_length_days:Number,

bleeding_intensity:String,

pain_level:Number,

fatigue_level:String,

acne_severity:String,

hair_loss_severity:String,

mood_pattern:String,

sleep_hours:Number,

water_intake_liters:Number,

stress_level:String,

exercise_frequency_per_week:Number,

sedentary_hours:Number,

anxiety_level:Number,

depression_level:Number,

self_reported_stress:String,

emotional_stability_score:Number,

family_history_pcos:String,

family_history_endometriosis:String,

family_history_fibroids:String,

thyroid_status:String,

weight_change_last_6_months:String

},

{

timestamps:true

}

);

module.exports =
mongoose.model(
"Assessment",
assessmentSchema
);