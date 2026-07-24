import { useEffect, useState }
from "react";

import {
  getPrediction,
}
from "../services/predictionService";

function PredictionCard() {

  const [prediction,
  setPrediction] =
  useState(null);

  useEffect(() => {

    loadPrediction();

  }, []);

  const loadPrediction =
  async () => {

    try {

      const data =
      await getPrediction();

      setPrediction(data);

    } catch (error) {

      console.log(error);

    }

  };

  if (!prediction)
    return null;

  return (

    <div
      style={{
        padding: "20px",
        background: "#fff",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >

      <h3>
        Next Period Prediction
      </h3>

      <p>
        Last Period:
        {" "}
        {
          new Date(
            prediction.lastPeriod
          ).toDateString()
        }
      </p>

      <p>
        Cycle Length:
        {" "}
        {
          prediction.cycleLength
        }
        {" "}days
      </p>

      <p>
        Predicted Next Period:
        {" "}
        {
          new Date(
            prediction.predictedNextPeriod
          ).toDateString()
        }
      </p>

    </div>

  );
}

export default PredictionCard;