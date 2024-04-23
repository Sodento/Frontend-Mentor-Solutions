import { useState } from "react";
import downArrow from "../../images/icon-arrow-down.svg";
import upArrow from "../../images/icon-arrow-up.svg";
import todolistIcon from '../../images/icon-todo.svg';
import calendarIcon from '../../images/icon-calendar.svg';
import remindersIcon from '../../images/icon-reminders.svg';
import planningIcon from '../../images/icon-planning.svg';

export default function Features() {
  const [dropdownToggled, setDropdownToggled] = useState(false);
  const [arrow, setArrow] = useState(true);

  const featuresListItems = [
    {
      name: "Todo List",
      image: todolistIcon,
    },
    {
      name: "Calendar",
      image: calendarIcon,
    },
    {
      name: "Reminders",
      image: remindersIcon,
    },
    {
      name: "Planning",
      image: planningIcon,
    },
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
        Features <img src={arrow ? downArrow : upArrow} alt="arrow" className="header__list-btn-arrow"></img>
        <div className={`options ${dropdownToggled ? "options__visible" : ""}`}>
          {featuresListItems.map((name, key) => {
            return (
              <button className="options__btn">
                <img src={name.image}></img>
                {name.name}
              </button>
            );
          })}
        </div>
      </button>
    </>
  );
}
