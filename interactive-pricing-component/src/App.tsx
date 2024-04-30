import { useState } from "react";
import iconCheck from "./images/icon-check.svg";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  
  return (
    <div className="font-body font-semibold bg-neutral-200 h-100 bg-bg-pattern bg-contain  bg-no-repeat flex justify-center overflow-hidden ">
      <div className="flex flex-col mt-20 gap-12">
        <div className="flex flex-col bg-pattern-circles bg-no-repeat bg-center items-center gap-4 p-8 w-100">
          <h1 className="text-4xl font-semibold text-neutral-600">
            Simple, traffic-based pricing
          </h1>
          <p className="text-neutral-500 font-semibold">
            Sign-up for our 30-day trial. No credit card required.
          </p>
        </div>
        <div className="flex flex-col bg-neutral-100 rounded-xl">
          <div className="flex p-8 flex-col gap-8">
            <div className="flex justify-between items-center">
              <h1 className="text-neutral-500">100K PAGEVIEWS</h1>
              <div className="flex items-center gap-2">
                <h1 className=" text-neutral-600 text-4xl ">$16.00</h1>
                <p className="text-neutral-500"> / month</p>
              </div>
            </div>
            
            <div>
              <input
                type="range"
                className="w-full appearance-none h-3 rounded-full bg-neutral-300 
                
                [&::-webkit-slider-runnable-track]:bg-neutral-300
                [&::-webkit-slider-runnable-track]:rounded-full
                [&::-webkit-slider-runnable-track]:h-3


                [&::-webkit-slider-thumb]:-mt-3.5
                [&::-webkit-slider-thumb]:appearance-none 
                [&::-webkit-slider-thumb]:w-10
                [&::-webkit-slider-thumb]:h-10
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-primary-100
                [&::-webkit-slider-thumb]:active:bg-primary-200
                [&::-webkit-slider-thumb]:hover:cursor-pointer
                [&::-webkit-slider-thumb]:active:cursor-grabbing
                [&::-webkit-slider-thumb]:bg-icon-slider
                [&::-webkit-slider-thumb]:bg-no-repeat
                [&::-webkit-slider-thumb]:bg-auto
                [&::-webkit-slider-thumb]:bg-center


                [&::-ms-track]:w-full
                [&::-ms-track]:h-2
                [&::-ms-fill-lower]:bg-primary-100
                [&::-ms-fill-upper]:bg-primary-100
                [&::-ms-thumb]:bg-primary-200




                "
                min={0}
                max={100}
              />
            </div>

            <div className="flex justify-end gap-4 items-center">
              <p className="text-neutral-500">Monthly Billing</p>
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <div
                    className={`hover:bg-primary-100 w-10 h-6 bg-neutral-400 rounded-full shadow-inner`}
                  ></div>
                  <div
                    className={`absolute w-4 h-4 bg-neutral-100 rounded-full shadow inset-y-1 transition-all duration-300  ${
                      isChecked ? "left-5" : "left-1"
                    }`}
                  ></div>
                </div>
                <input
                  type="checkbox"
                  className="hidden"
                  checked={isChecked}
                  onChange={handleToggle}
                />
              </label>
              <div className="flex gap-2 items-center">
                <p className="text-neutral-500">Yearly Billing</p>
                <p className="bg-primary-300 text-primary-400 rounded-2xl w-24 text-center text-sm">
                  25% discount
                </p>
              </div>
            </div>
          </div>
          <div className="border-t flex justify-between items-center text-neutral-500 p-8 border-neutral-300">
            <div className="">
              <div className="flex gap-3 items-center">
                <img src={iconCheck} alt="icon check" className="h-2 " />
                <p>Unlimited websites</p>
              </div>
              <div className="flex gap-3 items-center">
                <img src={iconCheck} alt="icon check" className="h-2" />
                <p>100% data ownership</p>
              </div>
              <div className="flex gap-3 items-center">
                <img src={iconCheck} alt="icon check" className="h-2" />
                <p>Email reports</p>
              </div>
            </div>
            <button className="text-primary-500 bg-neutral-600 h-10 rounded-3xl w-44 font-extrabold border-none hover:text-neutral-100">
              Start my trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
