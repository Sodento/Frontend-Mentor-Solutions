interface Props {
  theme: boolean;
  flags: string;
  common: string;
  population: number;
  region: string;
  capital: string;
}

export default function Card({
  theme,
  common,
  flags,
  population,
  region,
  capital,
}: Props) {
  return (
    <div className="flex flex-col w-full  rounded-b-lg" >
      <img src={flags} alt="" className="h-48 rounded-t-lg" />
      <div
        className={`flex flex-col gap-4 shadow-xl px-6 pt-8 pb-12 ${
          theme
            ? "bg-neutral-500 text-neutral-300"
            : "bg-neutral-200 text-neutral-600"
        } `}
      >
        <h2
          className={`font-extrabold ${
            theme ? "text-neutral-300" : "text-neutral-600"
          } `}
        >
          {common}
        </h2>
        <div className="flex flex-col font-semibold">
          <p>
            Population: <span className="font-light">{population}</span>
          </p>
          <p>
            Region: <span className="font-light">{region}</span>
          </p>
          <p>
            Capital: <span className="font-light">{capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
