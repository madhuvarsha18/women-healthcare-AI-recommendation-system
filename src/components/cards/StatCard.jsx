import "../../styles/cards.css";

function StatCard({ title, value }) {
  return (
    <div className="stat-card">
      <h2 className="stat-title">{title}</h2>

      <p className="stat-value">{value}</p>
    </div>
  );
}

export default StatCard;