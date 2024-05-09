import lightMoon from "../../images/moon-regular.svg";
import darkMoon from "../../images/moon-solid.svg";

interface Props {
  theme: boolean;
  themeClick: () => void;
}

export default function Header({ theme, themeClick }: Props) {
  return (
    <div
      className={`fixed w-full flex justify-between items-center shadow-md py-8 px-24 ${
        theme ? "bg-neutral-600" : "bg-neutral-100 "
      } `}
    >
      <h1 className={`font-extrabold text-2xl ${theme ? "text-neutral-300" : "text-neutral-600"}`}>
        Where in the world?
      </h1>
      <button className={`flex items-center font-semibold gap-2 ${theme ? "text-neutral-300" : "text-neutral-600"}`} onClick={themeClick}>
        <img
          src={theme ? lightMoon : darkMoon}
          alt="icon moon"
          className="h-5 w-5"
        />{" "}
        Dark Mode
      </button>
    </div>
  );
}
