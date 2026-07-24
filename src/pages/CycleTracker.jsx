import { useState } from "react";
import { createCycle } from "../services/cycleService";

function CycleTracker() {
  const [formData, setFormData] = useState({
    periodStartDate: "",
    periodEndDate: "",
    cycleLength: 28,
    flowLevel: "Medium",
    symptoms: "",
    mood: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await createCycle(formData);

      setMessage("Cycle Data Saved");

      setFormData({
        periodStartDate: "",
        periodEndDate: "",
        cycleLength: 28,
        flowLevel: "Medium",
        symptoms: "",
        mood: "",
      });
    } catch (error) {
      setMessage("Failed to save");
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Cycle Tracker</h1>

      <input
        type="date"
        name="periodStartDate"
        value={formData.periodStartDate}
        onChange={handleChange}
      />

      <input
        type="date"
        name="periodEndDate"
        value={formData.periodEndDate}
        onChange={handleChange}
      />

      <input
        type="number"
        name="cycleLength"
        value={formData.cycleLength}
        onChange={handleChange}
      />

      <select
        name="flowLevel"
        value={formData.flowLevel}
        onChange={handleChange}
      >
        <option>Light</option>
        <option>Medium</option>
        <option>Heavy</option>
      </select>

      <input
        type="text"
        name="symptoms"
        placeholder="Symptoms"
        value={formData.symptoms}
        onChange={handleChange}
      />

      <input
        type="text"
        name="mood"
        placeholder="Mood"
        value={formData.mood}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>
        Save Cycle
      </button>

      <p>{message}</p>
    </div>
  );
}

export default CycleTracker;