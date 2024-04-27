import logo from "../images/logo-mastercraft.svg";
import bookmark from "../images/icon-bookmark.svg";
import bookmarked from "../images/icon-bookmarked.svg";

import { useState } from "react";

export default function Monitor() {
  const [isMark, setIsMark] = useState(false);

  function handleClick() {
    setIsMark(!isMark);
  }

  return (
    <>
      <div className="monitor__container">
        <img className="monitor__logo" src={logo} alt="logo"></img>
        <div className="monitor__card">
          <div className="monitor__card-context">
            <h1 className="monitor__card-context-title">
              Mastercraft Bamboo Monitor Riser
            </h1>
            <p className="monitor__card-context-text">
              A beautiful & handcrafted monitor stand to reduce neck and eye
              strain.
            </p>
          </div>
          <div className="monitor__card-buttons">
            <button className="monitor__card-buttons-back">
              Back this project
            </button>
            <button
              className={
                isMark === false
                  ? "monitor__card-buttons-bookmark"
                  : "monitor__card-buttons-bookmark monitor__card-buttons-bookmark-bookmarked"
              }
              onClick={handleClick}
            >
              <img
                src={isMark === false ? bookmark : bookmarked}
                alt="bookmark"
              ></img>
              {isMark === false ? "Bookmark" : "Bookmarked"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
