import upArrow from "../images/icon-up.svg";
import downArrow from "../images/icon-down.svg";



export default function Card(props: {
  isDark: boolean;
  icon: any;
  username: string;
  followers: string;
  fans: string;
  today: number;
}) {


  return (
    <div
      className={
        props.isDark
          ? "flex flex-col justify-center items-center text-center gap-6 rounded-sm border-t-4 p-8 border-t-primary-300 border-neutral-dark-300  bg-neutral-dark-300 hover:cursor-pointer hover:opacity-75"
          : "flex flex-col justify-center items-center text-center gap-6 rounded-sm border-t-4 p-8 border-t-primary-300 border-neutral-light-300  bg-neutral-light-300 hover:cursor-pointer hover:opacity-75"
      }
    >
      <div className="flex gap-2 items-center">
        <img src={"./images/icon-facebook.svg"} alt="logo" className="" />
        <p
          className={
            props.isDark ? "text-neutral-dark-400" : "text-neutral-light-400"
          }
        >
          {props.username}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h1
          className={
            props.isDark
              ? "font-bold text-5xl text-neutral-dark-500"
              : "font-bold text-5xl text-neutral-light-500"
          }
        >
          {props.followers}
        </h1>
        <p
          className={
            props.isDark
              ? "uppercase tracking-widest text-neutral-dark-400"
              : "uppercase tracking-widest text-neutral-light-400"
          }
        >
          {props.fans}
        </p>
      </div>
      <div className={"flex gap-2 items-center"}>
        <img src={upArrow} alt="arrow" />
        <p className={"font-bold"}>{props.today} Today</p>
      </div>
    </div>
  );
}
