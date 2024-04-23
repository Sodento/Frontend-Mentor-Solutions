import { useState } from "react";
import Card from "./components/Card";
import profileImg from "./images/image-jeremy.png";
import data from "./data.json";
import iconWork from "./images/icon-work.svg";
import iconPlay from "./images/icon-play.svg";
import iconStudy from "./images/icon-study.svg";
import iconExercise from "./images/icon-exercise.svg";
import iconSocial from "./images/icon-social.svg";
import iconSelfcare from "./images/icon-self-care.svg";

export default function App() {
  const [time, setTime] = useState("daily");
  const [frameName, setFrameName] = useState("Day");

  function handleClick(e: any) {
    const timeLimit = e.target.textContent.toLowerCase();
    setTime(timeLimit);

    timeLimit === "daily"
      ? setFrameName("Day")
      : timeLimit === "weekly"
      ? setFrameName("Weekly")
      : timeLimit === "monthly"
      ? setFrameName("Monthly")
      : setFrameName("");
  }

  const backgroundColors = [
    "hsl(15, 100%, 70%)",
    "hsl(195, 74%, 62%)",
    "hsl(348, 100%, 68%)",
    "hsl(145, 58%, 55%)",
    "hsl(264, 64%, 52%)",
    "hsl(43, 84%, 65%)",
  ];

  const backgroundImages = [
    iconWork,
    iconPlay,
    iconStudy,
    iconExercise,
    iconSocial,
    iconSelfcare,
  ];

  return (
    <>
      <div className="container">
        <div className="profile">
          <div className="profile__character">
            <img
              className="profile__character-image"
              alt="avatar"
              src={profileImg}
            ></img>
            <p className="profile__character-text">Report for</p>
            <h1 className="profile__character-name">Jeremy Robson</h1>
          </div>
          <div className="selectors">
            <p
              className="selectors__btn"
              style={
                time === "daily" ? { color: "#fff" } : { color: "#6f76c8" }
              }
              onClick={handleClick}
            >
              Daily
            </p>
            <p className="selectors__btn" style={time === "weekly" ? { color: "#fff" } : { color: "#6f76c8"} } onClick={handleClick}>Weekly</p>
            <p className="selectors__btn" style={time === "monthly" ? { color: "#fff" } : { color: "#6f76c8"}} onClick={handleClick} >Monthly</p>
          </div>
        </div>
        {data.map((data, i) => (
          <Card
            key={i}
            type={data.title}
            current={
              time === "daily"
                ? data.timeframes.daily.current
                : time === "weekly"
                ? data.timeframes.weekly.current
                : time === "monthly"
                ? data.timeframes.monthly.current
                : null
            }
            previous={
              time === "daily"
                ? data.timeframes.daily.previous
                : time === "weekly"
                ? data.timeframes.weekly.previous
                : time === "monthly"
                ? data.timeframes.monthly.previous
                : null
            }
            frame={frameName}
            backgroundColor={backgroundColors[i]}
            backgroundImage={backgroundImages[i]}
          />
        ))}
      </div>
    </>
  );
}

