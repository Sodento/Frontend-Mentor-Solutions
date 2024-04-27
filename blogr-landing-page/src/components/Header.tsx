import logo from "../images/logo.svg";
import arrowLight from "../images/icon-arrow-light.svg";
import { useState } from "react";

export default function Header() {
  const [openIndex, setOpenIndex] = useState(-1);

  function handleOnClick(index: any) {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  const bars = [
    {
      name: "Product",
      contents: [
        "Overviewing",
        "Pricing",
        "Marketplace",
        "Features",
        "Integrations",
      ],
    },
    {
      name: "Company",
      contents: ["About", "Team", "Blog", "Careers"],
    },
    {
      name: "Connect",
      contents: ["Contact", "Newsletter", "LinkedIn"],
    },
  ];

  return (
    <>
      <div className="header__container">
        <div className="header__bar">
          <div className="header__bar-first">
            <img src={logo} alt="logo" className="header__bar-first-logo"></img>
            {bars.map((item, index) => {
              return (
                <div>
                  <button
                    className="header__bar-first-btn"
                    onClick={() => handleOnClick(index)}
                  >
                    {item.name}
                    <img src={arrowLight} alt="arrow"></img>
                  </button>
                  {openIndex === index && (
                    <div className="header__bar-first-btn-container">
                      {item.contents.map((subItem, i) => (
                        <a key={i} href="#" className="header__bar-first-btn-container-content">
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="header__bar-second">
            <button className="header__bar-second-login">Login</button>
            <button className="header__bar-second-signup">Sign Up</button>
          </div>
        </div>
        <div className="header__enterance">
          <h1 className="header__enterance-title">
            A modern publishing platform
          </h1>
          <p className="header__enterance-text">
            Grow your audience and build your online brand
          </p>
          <div className="header__enterance-btns">
            <button className="header__enterance-btns-btn1">
              Start for Free
            </button>
            <button className="header__enterance-btns-btn2">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}
