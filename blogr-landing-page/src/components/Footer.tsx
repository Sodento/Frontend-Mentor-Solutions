import logo from "../images/logo.svg";

export default function Footer() {
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
      <div className="footer__container">
        <img src={logo} alt="logo" className="footer__logo"></img>
        <div className="footer__options">
          {bars.map((item) => {
            return (
              <div className="footer__options-titles">
                <h3 className="footer__options-titles-title">{item.name}</h3>
                <div className="footer__options-contents">
                  {item.contents.map((content) => {
                    return <a href="#">{content}</a>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
