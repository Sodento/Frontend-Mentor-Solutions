import facebook from "../images/icon-facebook.svg";
import upArrow from "../images/icon-up.svg";

export default function SmallCard(props: { isDark: boolean; names: string }) {
  return (
    <div className={props.isDark ? "flex flex-col gap-8 p-4 bg-neutral-dark-300 hover:cursor-pointer hover:opacity-75" : "hover:cursor-pointer hover:opacity-75 flex flex-col gap-8 p-4 bg-neutral-light-300"}>
      <div className="flex justify-between items-center ">
        <p className={props.isDark ? "text-neutral-dark-400" : "text-neutral-light-400"}>
          {props.names}
        </p>
        <img src={facebook} alt="icon facebook" />
      </div>
      <div className="flex justify-between items-center">
        <h1 className={props.isDark ? "font-bold text-2xl text-neutral-dark-500" : "font-bold text-2xl text-neutral-light-500"}>87</h1>
        <div className="flex gap-2 items-center">
          <img src={upArrow} alt="arrow" />
          <p className="text-primary-100">3</p>
        </div>
      </div>
    </div>
  );
}
