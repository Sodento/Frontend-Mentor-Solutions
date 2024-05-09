import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import Card from "./Card";
import { Link } from "react-router-dom";
import { Countries } from "../../types";


interface Props {
  theme: boolean;
  countries: Countries[];
}



export default function Home({ theme, countries }: Props) {


  return (
    <div
      className={`flex flex-col gap-16 ${
        theme ? "bg-neutral-600" : "bg-neutral-200"
      }`}
    >

      <div className="flex justify-between items-center px-24 pt-36">
        <SearchBar theme={theme} />
        <FilterBar theme={theme} regions={countries.map(country => country.region)} />
      </div>
      <div className="grid grid-cols-4 px-24 gap-12">
        {countries.map((country) => (
          <Link to={`/detail/${country.ccn3}`} key={country.ccn3} >
            <Card
            key={country.ccn3}
            theme={theme}
            flags={country.flags.png}
            common={country.name.official}
            population={country.population}
            region={country.region}
            capital={country.capital}
            
          />
          </Link>
        ))}
      </div>
    </div>
  );
}
