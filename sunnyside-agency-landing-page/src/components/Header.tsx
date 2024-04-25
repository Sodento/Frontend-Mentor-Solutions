import sunnysideLogo from "../images/logo.svg";
import arrow from "../images/icon-arrow-down.svg";

export default function Header() {
  const headers = ["About", "Services", "Projects", "CONTACT"];

  return (
    <>
      <div className="header__container">
        <div className="header__container-bar">
          <img src={sunnysideLogo} alt="logo"></img>

          <div className="header__container-bar-btn">
            {headers.map((name, index) => {
              return <button>{name}</button>;
            })}
          </div>
        </div>
        <div className="header__container-title">
          <h1>We Are Creatives</h1>
          <img src={arrow} alt="arrow"></img>
        </div>
      </div>
    </>
  );
}
