import { getFoodImage } from "../data/foodImages";
import "./FoodGallery.css";

function FoodGallery({ foods, avoid = false }) {
  const foodItems = Array.isArray(foods)
    ? foods
    : String(foods || "").split(/[|,;\n]+/);

  const recommendations = foodItems
    .map((food) => String(food).trim())
    .filter(Boolean);

  if (!recommendations.length) return null;

  return (
    <div className="food-gallery" aria-label={avoid ? "Foods to avoid" : "Recommended foods"}>
      {recommendations.map((food, index) => (
        <figure className="food-gallery-item" key={`${food}-${index}`}>
          <img
            src={getFoodImage(food, avoid)}
            alt={food}
            loading="eager"
          />
          <figcaption>{food}</figcaption>
        </figure>
      ))}
      <a className="food-gallery-credit" href="https://unsplash.com" target="_blank" rel="noreferrer">Photos: Unsplash</a>
    </div>
  );
}

export default FoodGallery;
