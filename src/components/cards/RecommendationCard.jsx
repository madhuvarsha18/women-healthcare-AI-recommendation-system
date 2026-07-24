import "../../styles/cards.css";

function RecommendationCard({ title, description }) {
  return (
    <div className="recommendation-card">
      <h2 className="recommendation-title">{title}</h2>

      <p className="recommendation-description">
        {description}
      </p>
    </div>
  );
}

export default RecommendationCard;