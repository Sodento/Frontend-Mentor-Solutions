import { useState } from "react";
import downArrow from "../../images/icon-arrow-down.svg";
import upArrow from "../../images/icon-arrow-up.svg";

const Company = () => {
  const [dropdownToggled, setDropdownToggled] = useState(false);
  const [arrow, setArrow] = useState(true);

  const companyListItem = [
    { name: "History" },
    { name: "Our Team" },
    { name: "Blog" },
  ];

  return (
    <>
      <button
        className="header__list-btn"
        onClick={() => {
          setDropdownToggled(!dropdownToggled);
          setArrow(!arrow);
        }}
      >
        Company <img src={arrow ? downArrow : upArrow} alt="arrow" className="header__list-btn-arrow"></img>
        <div className={`options ${dropdownToggled ? "options__visible" : ""}`}>
          {companyListItem.map((name) => {
            return <button className="options__btn">{name.name}</button>;
          })}
        </div>
      </button>
    </>
  );
};

export default Company;
