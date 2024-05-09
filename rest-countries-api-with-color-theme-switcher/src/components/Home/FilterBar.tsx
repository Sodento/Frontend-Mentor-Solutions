import darkArrowDown from "../../images/chevron-down-solid-dark.svg";
import lightArrowDown from "../../images/chevron-down-solid.svg";
import { useState } from "react";

interface Props {
  theme: boolean;
  regions: string[];
}

export default function FilterBar({ theme, regions }: Props) {
  const [isClick, setIsClick] = useState<boolean>(false);

  const handleClick = () => {
    setIsClick((prevValue) => !prevValue);
  };

  const uniqueRegions = regions.filter(
    (region, index) => regions.indexOf(region) === index
  );

  return (
    <>
      <button
        onClick={handleClick}
        className={`flex justify-between items-center gap-10 px-6 py-4 rounded-md shadow-xl w-56 ${
          theme
            ? "bg-neutral-600 text-neutral-300"
            : "bg-neutral-100 text-neutral-600"
        } `}
      >
        Filter by Region{" "}
        <img
          src={theme ? lightArrowDown : darkArrowDown}
          alt="arrow"
          className="h-3 w-3"
        />
      </button>
      {isClick && (
        <div
          className={`absolute flex flex-col items-start w-56 rounded-md right-24 px-6 py-4 translate-y-32 gap-1 ${
            theme
              ? "bg-neutral-500 text-neutral-300"
              : "bg-neutral-100 text-neutral-600"
          }`}
        >
          {uniqueRegions.map((region, i) => (
            <button key={i}>{region}</button>
          ))}
        </div>
      )}
    </>
  );
}
