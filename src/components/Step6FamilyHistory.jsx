function Step6FamilyHistory({
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
        Step 6 - Family History & Risk Factors
      </h2>

      <label>
        Family History of PCOS
      </label>

      <select
        name="family_history_pcos"
        onChange={handleChange}
      >
        <option value="">
          Select
        </option>
        <option value="Yes">
          Yes
        </option>
        <option value="No">
          No
        </option>
      </select>

      <br /><br />

      <label>
        Family History of Endometriosis
      </label>

      <select
        name="family_history_endometriosis"
        onChange={handleChange}
      >
        <option value="">
          Select
        </option>
        <option value="Yes">
          Yes
        </option>
        <option value="No">
          No
        </option>
      </select>

      <br /><br />

      <label>
        Family History of Fibroids
      </label>

      <select
        name="family_history_fibroids"
        onChange={handleChange}
      >
        <option value="">
          Select
        </option>
        <option value="Yes">
          Yes
        </option>
        <option value="No">
          No
        </option>
      </select>

      <br /><br />

      <label>
        Thyroid Status
      </label>

      <select
        name="thyroid_status"
        onChange={handleChange}
      >
        <option value="">
          Select
        </option>

        <option value="Normal">
          Normal
        </option>

        <option value="Hypothyroid">
          Hypothyroid
        </option>

        <option value="Hyperthyroid">
          Hyperthyroid
        </option>

      </select>

      <br /><br />

      <label>
        Weight Change Last 6 Months
      </label>

      <select
        name="weight_change_last_6_months"
        onChange={handleChange}
      >
        <option value="">
          Select
        </option>

        <option value="No Change">
          No Change
        </option>

        <option value="Gained 1-3kg">
          Gained 1-3kg
        </option>

        <option value="Lost 1-3kg">
          Lost 1-3kg
        </option>

        <option value="Gained 4kg+">
          Gained 4kg+
        </option>

        <option value="Lost 4kg+">
          Lost 4kg+
        </option>

      </select>

      <br /><br />

      <button onClick={nextStep}>
        Next
      </button>

    </div>
  );
}

export default Step6FamilyHistory;