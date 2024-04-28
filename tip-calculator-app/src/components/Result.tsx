export default function Result({ name, value }: any) {
  return (
    <div className="card__calculate-card">
      <div className="card__calculate-card-box">
        <h1 className="card__calculate-card-box-name">{name}</h1>
        <p className="card__calculate-card-box-person">/ person</p>
      </div>
      <h1 className="card__calculate-card-amount">${value}</h1>
    </div>
  );
}
