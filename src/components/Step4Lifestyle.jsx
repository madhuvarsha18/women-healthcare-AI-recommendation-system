function Step4Lifestyle({
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

      <h2>Step 4 - Lifestyle</h2>

      <label>Sleep Hours</label>
      <input
        type="number"
        name="sleep_hours"
        onChange={handleChange}
      />

      <br /><br />

      <label>Water Intake (Liters)</label>
      <input
        type="number"
        step="0.1"
        name="water_intake_liters"
        onChange={handleChange}
      />

      <br /><br />

      <label>Stress Level</label>
      <select
        name="stress_level"
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <br /><br />

      <label>Exercise Days Per Week</label>
      <input
        type="number"
        name="exercise_frequency_per_week"
        onChange={handleChange}
      />

      <br /><br />

      <label>Sedentary Hours</label>
      <input
        type="number"
        step="0.5"
        name="sedentary_hours"
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={nextStep}>
        Next
      </button>

    </div>
  );
}

export default Step4Lifestyle;