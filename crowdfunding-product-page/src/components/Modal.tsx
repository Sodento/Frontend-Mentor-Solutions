import { useState } from "react";
import closeIcon from "../images/icon-close-modal.svg";
import ModalCard from "./ModalCard";

export default function Modal({trig} : any) {
  const [trigger, setTrigger] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [test, setTest] = useState(false);

  function handleClick() {
    setTrigger(!trigger);
  }

  function closeModal() {
    setTrigger(!trigger);
    setTest(false);
  }


  function openModalPage(buttonId: any) {
    setSelectedId(buttonId);
  }

  

  return trig === trigger ? (
    <div className="modal__container">
      <img
        src={closeIcon}
        alt="close icon"
        className="modal__close"
        onClick={closeModal}
      />
      <div className="modal__card">
        <h1 className="modal__card-title">Back this project</h1>
        <p className="modal__card-description">
          Want to support us bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <div className="modal__card-items">
          <ModalCard
            title="Pledge with no reward"
            price=""
            description="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
            id="1"
            isSelected={selectedId === "1"}
            onClick={openModalPage}
            continueClick={handleClick}
          />
          <ModalCard
            title="Bamboo Stand"
            price="25"
            amount="101"
            description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
            id="2"
            isSelected={selectedId === "2"}
            onClick={openModalPage}
            continueClick={handleClick}
          />

          <ModalCard
            title="Black Edition Stand"
            price="75"
            amount="64"
            description="You get a Black Special Edition computer stand and a presonal thank you. You'll be added to our Backer member list. Shipping is included."
            id="3"
            isSelected={selectedId === "3"}
            onClick={openModalPage}
            continueClick={handleClick}
          />

          <ModalCard
            title="Mahogany Special Edition"
            price="200"
            amount="0"
            description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."
            id="4"
            isSelected={selectedId === "4"}
            onClick={openModalPage}
            continueClick={handleClick}
          />
        </div>
      </div>
    </div>
  ) : null;
}
