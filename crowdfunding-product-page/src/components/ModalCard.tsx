import { useState } from "react";

export default function ModalCard({
  title,
  price,
  amount,
  description,
  id,
  isSelected,
  onClick,
  continueClick
}: any) {

  const [pledge, setPledge] = useState(price);

  function handleChange(e : any) {
    setPledge(e.target.value);
  }


  return (
    <div className={`modalcard__container ${amount <= 0 ? "visible" : ""} ${isSelected ? "modalcard__container-selected" : ""}`}>
      <div className="modalcard__header">
        <div className="modalcard__header-selection">
          <div className="modalcard__header-selection-select">
            <button
              className={`modalcard__header-selection-select-btn ${
                isSelected
                  ? "modalcard__header-selection-select-btn-clicked"
                  : ""
              }`}
              onClick={amount <= 0 ? () => onClick("") : () => onClick(id)}
            ></button>
            <h1
              className="modalcard__header-selection-select-title"
              onClick={amount <= 0 ? () => onClick("") : () => onClick(id)}
            >
              {title}
            </h1>
          </div>

          <p
            className={`modalcard__header-selection-select-pledge ${
              price === ""
                ? "modalcard__header-selection-select-pledge-visiblity"
                : ""
            }`}
          >
            Pledge ${price} or more
          </p>
        </div>
        <div className="modalcard__header-amounts">
          <h1 className="modalcard__header-amounts-amount">{amount} </h1>
          <p
            className={`modalcard__header-amounts-left ${
              price === ""
                ? "modalcard__header-selection-select-pledge-visiblity"
                : ""
            }`}
          >
            left
          </p>
        </div>
      </div>
      <p className="modalcard__description">{description}</p>
      {isSelected ? (
        <div className="modalcard__selected">
          <p className="modalcard__selected-text">Enter your pledge</p>
          <div className="modalcard__selected-buttons">
          <input className="modalcard__selected-buttons-amount" type="text" onChange={handleChange} value={price > 0 ? pledge : null}></input>
            <button className="modalcard__selected-buttons-cnt" onClick={continueClick}>
              Continue
            </button>
          </div>
        </div>
      ) : null}
    </div>
    
  );
}
