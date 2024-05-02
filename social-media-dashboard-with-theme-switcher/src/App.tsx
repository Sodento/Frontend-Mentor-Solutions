import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import SmallCard from "./components/SmallCard";

function App() {
  const [isDark, setIsDark] = useState<boolean>(true);

  function handleClick() {
    setIsDark(() => !isDark);
    console.log(isDark);
  }

  const cards = [
    {
      icon: "../images/icon-facebook.svg",
      username: "@nathanf",
      followers: "1987",
      fans: "followers",
      today: 12,
    },
    {
      icon: "images/icon-twitter.svg",
      username: "@nathanf",
      followers: "1044",
      fans: "followers",
      today: 99,
    },
    {
      icon: "../images/icon-instagram.svg",
      username: "@realnathanf",
      followers: "11k",
      fans: "followers",
      today: 1099,
    },
    {
      icon: "../images/icon-youtube.svg",
      username: "Nathan F.",
      followers: "8239",
      fans: "subscribers",
      today: 144,
    },
  ];

  const smallCards = [
    {names: "Page Views"},
    {names: "Likes"},
    {names: "Likes"},
    {names: "Public Views"},
    {names: "Retweets"},
    {names: "Likes"},
    {names: "Likes"},
    {names: "Total Views"},
  ]

  return (
    <>
      <div
        className={
          isDark
            ? "h-screen bg-neutral-dark-100"
            : "h-screen bg-neutral-light-100"
        }
      >
        <Header isDark={isDark} onClick={handleClick} />
        <div className="grid grid-cols-4 mx-40 gap-8 -translate-y-1/2">
          {cards.map((card) => (
            <Card
              isDark={isDark}
              icon={card.icon}
              username={card.username}
              followers={card.followers}
              fans={card.fans}
              today={card.today}
            />
          ))}
        </div>
        <h1
          className={
            isDark ? "-translate-y-16 mx-40 text-2xl font-bold text-neutral-dark-500" : "-translate-y-16 mx-40 text-2xl font-bold text-neutral-light-500"
          }
        >
          Overview - Today
        </h1>
        <div className={"grid grid-cols-4 grid-rows-4 mx-40 gap-8"}>
          {smallCards.map((smallCard) => (
            <SmallCard
              isDark={isDark}
              names={smallCard.names}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
