export default function Card({
  title,
  price,
  description,
  amount,
}: any) {
  

  return (
    <div className={amount <= 0 ? "card visible" : "card"}>
      <div className="card__info">
        <h1 className="card__info-title">{title}</h1>
        <p className="card__info-text">Pledge ${price} or more</p>
      </div>
      <p className="card__description">{description}</p>
      <div className="card__footer">
        <p className="card__footer-amount">
          {amount}
          <span> left</span>
        </p>
        <button className={amount <= 0 ? "card__footer-button card__footer-button-stock" : "card__footer-button"}>{amount <= 0 ? "Out of stock" : "Select Reward"}</button>
      </div>
    </div>
  );
}
