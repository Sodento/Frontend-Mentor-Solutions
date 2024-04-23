import logoSnap from "../../images/logo.svg";
import downArrow from "../../images/icon-arrow-down.svg";
import Company from "./Company";
import Features from "./Features";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header__list">
          <img src={logoSnap} alt="logo"></img>
          <Features />
          <Company />
          <button className="header__list-btn">Careers</button>
          <button className="header__list-btn">About</button>
        </div>
        <div className="header__enterance">
          <button className="header__enterance-login">Login</button>
          <button className="header__enterance-register">Register</button>
        </div>
      </div>
    </>
  );
}
