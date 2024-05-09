import { useState } from "react";

interface Props {
  theme: boolean;
}

export default function SearchBar({ theme }: Props) {
  const [value, setValue] = useState<string>("");


  const searchChange = (e: React.FormEvent<HTMLInputElement>) => {
    const searchValue = e.currentTarget.value;
    setValue(searchValue);
  };

  return (
    <div
      className={`py-4 px-8 w-2/5 rounded-md shadow-xl ${
        theme ? "bg-neutral-600" : "bg-neutral-100"
      }`}
    >
      <form>
        <input
          value={value}
          onChange={searchChange}
          type="text"
          placeholder="Search for a country..."
          className={`w-full px-12 focus:outline-none font-semibold ${
            theme
              ? "bg-neutral-600 placeholder:text-neutral-400  bg-lightSearchIcon bg-no-repeat text-neutral-300"
              : "bg-neutral-100 placeholder:text-neutral-600 bg-darkSearchIcon bg-no-repeat text-neutral-600"
          }`}
        />
      </form>
    </div>
  );
}
