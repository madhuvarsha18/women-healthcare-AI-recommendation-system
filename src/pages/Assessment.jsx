import { useState } from "react";

 import Step1Personal from "../components/Step1Personal";
 import Step2Cycle from "../components/Step2Cycle";
 import Step3Symptoms from "../components/Step3Symptoms";
import Step4Lifestyle from "../components/Step4Lifestyle";
import Step6FamilyHistory from "../components/Step6FamilyHistory";
import Step5Mental from "../components/Step5Mental";
import Step7Review from "../components/Step7Review";
function Assessment() {

  const [formData, setFormData] = useState({

  age: "",

  cycle_regularity: "",
  cycle_length_days: "",
  bleeding_intensity: "",
  pain_level: "",

  fatigue_level: "",
  acne_severity: "",
  hair_loss_severity: "",

  mood_pattern: "",

  sleep_hours: "",
  water_intake_liters: "",
  stress_level: "",

  exercise_frequency_per_week: "",
  sedentary_hours: "",

  anxiety_level: "",
  depression_level: "",
  self_reported_stress: "",
  emotional_stability_score: "",

  family_history_pcos: "",
  family_history_endometriosis: "",
  family_history_fibroids: "",

  thyroid_status: "",
  weight_change_last_6_months: ""

});

  const [step, setStep] = useState(1);

  const nextStep = () => setStep((currentStep) => Math.min(currentStep + 1, 7));
  const previousStep = () => setStep((currentStep) => Math.max(currentStep - 1, 1));

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        padding: "40px",
      }}
    >
      

      {step === 1 && (
        <Step1Personal
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          previousStep={previousStep}
        />
      )}
      {step === 2 && (
        <Step2Cycle
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          previousStep={previousStep}
        />
      )}
      {step === 3 && (
  <Step3Symptoms
    formData={formData}
    setFormData={setFormData}
    nextStep={nextStep}
    previousStep={previousStep}
  />
)}
{step === 4 && (
  <Step4Lifestyle
    formData={formData}
    setFormData={setFormData}
    nextStep={nextStep}
  previousStep={previousStep}
  />
)}
{step === 5 && (
  <Step5Mental
    formData={formData}
    setFormData={setFormData}
    nextStep={nextStep}
  previousStep={previousStep}
  />
)}
{step === 6 && (
  <Step6FamilyHistory
    formData={formData}
    setFormData={setFormData}
    nextStep={nextStep}
  previousStep={previousStep}
  />
)}
{step === 7 && (
  <Step7Review
    formData={formData}
  onEdit={() => setStep(1)}
  />
)}
    </div>
  );
}

export default Assessment;
