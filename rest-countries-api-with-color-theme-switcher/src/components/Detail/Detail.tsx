import { Link, useParams } from "react-router-dom";

import darkArrow from "../../images/arrow-left-solid-dark.svg";
import lightArrow from "../../images/arrow-left-solid-light.svg";
import { Countries } from "../../types";

interface Props {
  theme: boolean;
  countries: Countries[];
}

export default function Detail({ theme, countries }: Props) {
  const { ccn3 } = useParams<{ ccn3: string }>();
  const country = countries.find((country) => country.ccn3 === ccn3);

  return (
    <div
      className={` h-screen px-24 pt-36 flex flex-col gap-20  ${
        theme ? "bg-neutral-500" : "bg-neutral-200"
      }`}
    >
      <Link to={`/`}>
        <button
          className={`flex h-12 justify-center w-36 gap-2 shadow-xl items-center rounded-md ${
            theme
              ? "text-neutral-300 bg-neutral-600"
              : "text-neutral-600 bg-neutral-100"
          }`}
        >
          <img
            src={theme ? lightArrow : darkArrow}
            alt="arrow"
            className="w-4 h-4"
          />
          Back
        </button>
      </Link>
      <div className="flex items-center justify-between ">
        <img src={country?.flags.png} alt="" className="w-2/5 h-80" />
        <div
          className={`flex flex-col gap-12 w-2/5 ${
            theme ? "text-neutral-300" : "text-neutral-600"
          }`}
        >
          <div className="flex flex-col gap-6">
            <h1 className="font-extrabold text-3xl">{country?.name.common}</h1>
            <div className="flex font-semibold gap-20">
              <div className="flex flex-col gap-1">
                <p>
                  Native Name:{" "}
                  <span className="font-light">
                    {Object.entries(country?.name.nativeName || {})
                      .slice(-1)
                      .map(([languageCode, names]) => (
                        <span key={languageCode}>{names.common}</span>
                      ))}
                  </span>
                </p>
                <p>
                  Population:{" "}
                  <span className="font-light">{country?.population.toLocaleString()}</span>
                </p>
                <p>
                  Region: <span className="font-light">{country?.region}</span>
                </p>
                <p>
                  Sub Region:{" "}
                  <span className="font-light">{country?.subregion}</span>
                </p>
                <p>
                  Capital:{" "}
                  <span className="font-light">{country?.capital}</span>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p>
                  Top Level Domain:{" "}
                  <span className="font-light">{country?.tld}</span>
                </p>
                <p>
                  Currencies:{" "}
                  <span className="font-light">
                    {Object.values(country?.currencies || {}).map(
                      (currency) => `${currency.name}`
                    )}
                  </span>
                </p>
                <p>
                  Languages:{" "}
                  <span className="font-light">
                    {Object.values(country?.languages || {}).map(
                      (language, index, array) => (
                        <span key={language}>
                          {language}
                          {index !== array.length - 1 && ", "}
                        </span>
                      )
                    )}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <p>Border Countries:{" "}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
