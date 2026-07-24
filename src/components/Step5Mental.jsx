function Step5Mental({
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

      <h2>
        Step 5 - Mental Wellness
      </h2>

      <label>
        Anxiety Level (1-10)
      </label>

      <input
        type="range"
        min="1"
        max="10"
        name="anxiety_level"
        value={formData.anxiety_level || 5}
        onChange={handleChange}
      />

      <p>
        {formData.anxiety_level || 5}
      </p>

      <br />

      <label>
        Depression Level (1-10)
      </label>

      <input
        type="range"
        min="1"
        max="10"
        name="depression_level"
        value={formData.depression_level || 5}
        onChange={handleChange}
      />

      <p>
        {formData.depression_level || 5}
      </p>

      <br />

      <label>
        Self Reported Stress
      </label>

      <select
        name="self_reported_stress"
        onChange={handleChange}
      >
        <option value="">
          Select
        </option>

        <option value="Low">
          Low
        </option>

        <option value="Medium">
          Medium
        </option>

        <option value="High">
          High
        </option>
      </select>

      <br />
      <br />

      <label>
        Emotional Stability Score
      </label>

      <input
        type="range"
        min="1"
        max="100"
        name="emotional_stability_score"
        value={
          formData.emotional_stability_score || 50
        }
        onChange={handleChange}
      />

      <p>
        {formData.emotional_stability_score || 50}
      </p>

      <br />

      <button
  onClick={() => {
    console.log(formData);
    nextStep();
  }}
>
        Next
      </button>

    </div>
  );
}

export default Step5Mental;