function Step2Cycle({
  formData,
  setFormData,
  nextStep,
}) {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  return (
    <div>

      <h2>
        Step 2 - Menstrual Health
      </h2>

      <select
        name="cycle_regularity"
        value={
          formData.cycle_regularity || ""
        }
        onChange={handleChange}
      >
        <option value="">
          Select Cycle Type
        </option>

        <option value="Regular">
          Regular
        </option>

        <option value="Irregular">
          Irregular
        </option>

        <option value="Absent">
          Absent
        </option>

      </select>

      <br />
      <br />

      <input
        type="number"
        name="cycle_length_days"
        placeholder="Cycle Length"
        value={
          formData.cycle_length_days || ""
        }
        onChange={handleChange}
      />

      <br />
      <br />

      <select
        name="bleeding_intensity"
        value={
          formData.bleeding_intensity || ""
        }
        onChange={handleChange}
      >
        <option value="">
          Bleeding Intensity
        </option>

        <option value="Light">
          Light
        </option>

        <option value="Normal">
          Normal
        </option>

        <option value="Heavy">
          Heavy
        </option>

        <option value="Spotting">
          Spotting
        </option>

      </select>

      <br />
      <br />

      <input
        type="range"
        min="1"
        max="10"
        name="pain_level"
        value={
          formData.pain_level || 5
        }
        onChange={handleChange}
      />

      <p>
        Pain Level:
        {formData.pain_level || 5}
      </p>

      <button onClick={nextStep}>
        Next
      </button>

    </div>
  );
}

export default Step2Cycle;