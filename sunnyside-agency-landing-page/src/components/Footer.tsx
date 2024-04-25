import logo from "../images/logo.svg";
import icon1 from "../images/icon-facebook.svg";
import icon2 from "../images/icon-instagram.svg";
import icon3 from "../images/icon-twitter.svg";
import icon4 from "../images/icon-pinterest.svg";

export default function Footer() {
  const sections = ["About", "Services", "Projects"];
  const icons = [icon1, icon2, icon3, icon4];

  return (
    <>
      <div className="footer__container">
        <img src={logo} alt="logo" className="footer__container-logo" />
        <div className="footer__container-info">
          {sections.map((section) => {
            return <a href="#" >{section}</a>;
          })}
        </div>
        <div className="footer__container-icons">
          {icons.map((icon) => {
            return <img src={icon} alt="icon" className="footer__container-icons-icon"></img>;
          })}
        </div>
      </div>
    </>
  );
}
