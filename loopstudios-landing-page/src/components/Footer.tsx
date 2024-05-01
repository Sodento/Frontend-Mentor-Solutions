import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

export default function Footer() {
  const icons = [facebook, twitter, pinterest, instagram];
  const buttons = ["About", "Careers", "Events", "Products", "Support"];

  return (
    <div className="flex flex-col gap-4 bg-primary-200 h-44 px-32 py-12">
      <div className="flex justify-between items-center">
        <img src={logo} alt="logo" />
        <div className="flex gap-4 items-center">
          {icons.map((icon) => {
            return (
              <img
                src={icon}
                alt="icon"
                key={icon}
                className="hover:cursor-pointer hover:border-b-2 hover:border-primary-100 pb-2 border-b-2 border-primary-200"
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-8">
          {buttons.map((button) => {
            return <a className="text-primary-100 hover:cursor-pointer hover:underline hover:underline-offset-8">{button}</a>;
          })}
        </div>
        <p className="text-primary-400">© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </div>
  );
}
