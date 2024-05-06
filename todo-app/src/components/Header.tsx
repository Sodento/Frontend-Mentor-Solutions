import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";

interface Props {
  theme: boolean;
  onClick: () => void;
}

export default function Header({ theme, onClick }: Props) {

  

  return (
    <div className="flex justify-between items-center w-2/5  mt-24">
      <h1 className="text-neutral-light-100 tracking-[0.6rem] text-4xl font-bold">
        TODO
      </h1>
      <button onClick={onClick}>
        <img src={theme ? moon : sun} alt="icon"></img>
      </button>
    </div>
  );
}
