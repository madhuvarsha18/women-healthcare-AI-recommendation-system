function Step1Personal({
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
        Step 1 - Personal Information
      </h2>

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="number"
        name="height"
        placeholder="Height (cm)"
        value={formData.height}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="number"
        name="weight"
        placeholder="Weight (kg)"
        value={formData.weight}
        onChange={handleChange}
      />

      <br />
      <br />

      <button onClick={nextStep}>
        Next
      </button>

    </div>
  );
}

export default Step1Personal;