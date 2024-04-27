export default function Dashboard() {
  return (
    <>
      <div className="dashboard__container">
        <div className="dashboard__cards">
          <div className="dashboard__cards-card dashboard__cards-card-border">
            <h1 className="dashboard__cards-card-amount">$89,914</h1>
            <p className="dashboard__cards-card-text">of $100,000 backed</p>
          </div>
          <div className="dashboard__cards-card dashboard__cards-card-border">
            <h1 className="dashboard__cards-card-amount">5,007</h1>
            <p className="dashboard__cards-card-text">total backers</p>
          </div>
          <div className="dashboard__cards-card">
            <h1 className="dashboard__cards-card-amount">56</h1>
            <p className="dashboard__cards-card-text">days left</p>
          </div>
        </div>
        <div className="dashboard__bar">
          <div className="dashboard__bar-color"></div>
        </div>
      </div>
    </>
  );
}
