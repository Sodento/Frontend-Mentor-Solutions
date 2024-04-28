import { useState } from "react";
import logo from "./images/logo.svg";
import Result from "./components/Result";

export default function App() {
  const [bill, setBill] = useState(0.0);
  const [people, setPeople] = useState(0.0);
  const [tip, setTip] = useState(1);

  function getBill(e: any) {
    setBill(e.target.value);
  }

  function getPeople(e: any) {
    setPeople(e.target.value);
  }

  function changeTip(e: any) {
    setTip(e.target.value);
  }

  function customTip(e: any) {
    e.target.value > 0 ? setTip(e.target.value / 100) : setTip(1);
  }

  function handleReset() {
    setBill(0.0);
    setPeople(0.0);
    setTip(1);
  }

  return (
    <div>
      <img src={logo} alt="logo" className="logo" />
      <div className="card__container">
        <div className="card__process">
          <div className="card__process-input">
            <label htmlFor="" className="card__process-input-name">
              Bill
            </label>
            <input
              className="card__process-input-amount background-bill"
              placeholder="0"
              onChange={getBill}
              value={bill === 0 ? "" : bill}
            />
          </div>
          <div className="card__process-tips">
            <label className="card__process-tips-name">Select Tip %</label>
            <div className="card__process-tips-amounts">
              <button
                className={`card__process-tips-amounts-tip`}
                value={0.05}
                onClick={changeTip}
              >
                5%
              </button>
              <button
                className={`card__process-tips-amounts-tip`}
                value={0.1}
                onClick={changeTip}
              >
                10%
              </button>
              <button
                className={`card__process-tips-amounts-tip`}
                value={0.15}
                onClick={changeTip}
              >
                15%
              </button>
              <button
                className={`card__process-tips-amounts-tip`}
                value={0.25}
                onClick={changeTip}
              >
                25%
              </button>
              <button
                className={`card__process-tips-amounts-tip`}
                value={0.5}
                onClick={changeTip}
              >
                50%
              </button>
              <input
                className="card__process-tips-amounts-tip card__process-tips-amounts-custom"
                placeholder="Custom"
                onChange={customTip}
              />
            </div>
          </div>
          <div className="card__process-input">
            <label
              htmlFor=""
              className="card__process-input-name card__process-input-name-space"
            >
              Number of People {people === 0 ? <p>Can't be zero</p> : ""}
            </label>
            <input
              className={`card__process-input-amount background-person ${
                people === 0 ? "card__process-input-amount-warning" : ""
              } `}
              placeholder="0"
              onChange={getPeople}
              value={people === 0 ? "" : people}
            ></input>
          </div>
        </div>
        <div className="card__calculate">
          <Result
            name="Tip Amount"
            value={
              bill === 0
                ? (0.0).toFixed(2)
                : people === 0
                ? (0.0).toFixed(2)
                : ((bill * tip) / people).toFixed(2)
            }
          />
          <Result
            name="Total"
            value={
              bill === 0
                ? (0.0).toFixed(2)
                : people === 0
                ? (0.0).toFixed(2)
                : (
                    (parseFloat(String(bill)) +
                      parseFloat(String(bill)) * parseFloat(String(tip))) /
                    people
                  ).toFixed(2)
            }
          />
          <button className="card__calculate-btn" onClick={handleReset}>
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
