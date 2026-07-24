function Step3Symptoms({
  formData,
  setFormData,
  nextStep,
}) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Step 3 - Symptoms</h2>

      <label>Fatigue Level</label>
      <select
        name="fatigue_level"
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Mild">Mild</option>
        <option value="Moderate">Moderate</option>
        <option value="Severe">Severe</option>
      </select>

      <br /><br />

      <label>Acne Severity</label>
      <select
        name="acne_severity"
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="No Acne">No Acne</option>
        <option value="Mild">Mild</option>
        <option value="Moderate">Moderate</option>
        <option value="Severe">Severe</option>
      </select>

      <br /><br />

      <label>Hair Loss</label>
      <select
        name="hair_loss_severity"
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="None">None</option>
        <option value="Mild">Mild</option>
        <option value="Moderate">Moderate</option>
        <option value="Severe">Severe</option>
      </select>

      <br /><br />

      <label>Mood Pattern</label>
      <select
        name="mood_pattern"
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Stable">Stable</option>
        <option value="Mild Swings">Mild Swings</option>
        <option value="Severe Swings">Severe Swings</option>
      </select>

      <br /><br />

      <button onClick={nextStep}>
        Next
      </button>
    </div>
  );
}

export default Step3Symptoms;