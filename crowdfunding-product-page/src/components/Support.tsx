import check from "../images/icon-check.svg";

export default function Support({supportClick} : any) {
  return (
    <>
      <div className="support__container">
        <img src={check} alt="check" className="support__check" />
        <div className="support__card">
          <h1 className="support__card-title">Thanks for your support!</h1>
          <p className="support__card-text">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
          <button className="support__card-btn" onClick={supportClick}>Got it!</button>
        </div>
      </div>
    </>
  );
}
