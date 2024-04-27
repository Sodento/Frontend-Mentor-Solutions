import logo from "../images/logo.svg";

export default function Header() {
  const selections = [{name: "About"}, {name: "Discover"}, {name: "Get Started"}];

  return (
    <>
      <div className="header__container">
        <div className="header__navbar">
          <img src={logo} alt="logo" className="header__navbar-logo" />
          <div className="header__navbar-selections">
            {selections.map((selector) => {
              return (
                <a href="#" className="header__navbar-selections-btn">
                  {selector.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
