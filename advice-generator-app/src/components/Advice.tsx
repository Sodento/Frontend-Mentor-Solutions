import axios from "axios";
import { useEffect, useState } from "react";

import dividerDesktop from "../images/pattern-divider-desktop.svg";
import dice from "../images/icon-dice.svg";

interface AdviceProps {
  slip: {
    id: number;
    advice: string;
  };
}

export default function Advice() {
  const [advice, setAdvice] = useState<AdviceProps | null>(null);

  const fetchAdvice = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(response.data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const handleClick = () => {
    fetchAdvice();
  };

  return (
    <div className="flex flex-col justify-center items-center m-auto w-1/3 text-center gap-6 px-12 rounded-xl bg-neutral-200 h-3/5">
      <p className="text-primary-200 tracking-[0.4rem] text-sm">
        ADVICE #{advice?.slip.id}
      </p>
      <p className="text-primary-100 w-full h-1/3 flex justify-center items-center">"{advice?.slip.advice}"</p>
      <img src={dividerDesktop} alt="" />

      <button
        onClick={handleClick}
        className="w-16 h-16 rounded-full bg-primary-200 absolute translate-y-52 hover:shadow-2xl hover:shadow-primary-200 "
      >
        <img src={dice} alt="dice" className="m-auto" />
      </button>
    </div>
  );
}
