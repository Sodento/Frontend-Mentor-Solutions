import logo from "../images/logo-mastercraft.svg";
import bookmark from "../images/icon-bookmark.svg";
import bookmarked from "../images/icon-bookmarked.svg";

import { useState } from "react";
import Modal from "./Modal";
import Support from "./Support";

export default function Monitor() {
  const [isMark, setIsMark] = useState(false);
  const [isTrigger, setIsTrigger] = useState(false);
  const [isSupportClick, setIsSupportClick] = useState(false);

  function handleClick() {
    setIsMark(!isMark);
  }

  function openModalPage() {
    setIsTrigger(!isTrigger);
    setIsSupportClick(true);
  }



  function supportClick() {

    setIsSupportClick(!isSupportClick);
    console.log(isSupportClick)
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
        <Modal trig={isTrigger}  />
        {isSupportClick ? <Support supportClick={supportClick} /> : ""}
          </div>
          <div className="monitor__card-buttons">
            <button
              className="monitor__card-buttons-back"
              onClick={openModalPage}
            >
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
