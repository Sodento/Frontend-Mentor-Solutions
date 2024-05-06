import { useState } from "react";

interface Props {
  theme: boolean;
  counter: number;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  clearCompleted: () => void;
}

export default function Filter({
  theme,
  counter,
  setFilter,
  clearCompleted
}: Props) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  return (
    <div
      className={`flex justify-between items-center p-4 ${
        theme ? "text-neutral-light-400" : "text-neutral-dark-500"
      }`}
    >
      <p>{counter} items left</p>
      <div className="flex gap-4">
        <button
          onClick={() => {
            setFilter("all");
            setSelectedFilter("all");
          }}
          className={`${
            selectedFilter === "all"
              ? "text-primary-100"
              : theme ? "hover:text-neutral-light-500" : "hover:text-neutral-dark-400"
          }`}
        >
          All
        </button>
        <button
          onClick={() => {
            setFilter("active");
            setSelectedFilter("active");
          }}
          className={`${
            selectedFilter === "active"
              ? "text-primary-100"
              : theme ? "hover:text-neutral-light-500" : "hover:text-neutral-dark-400"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => {
            setFilter("completed");
            setSelectedFilter("completed");
          }}
          className={`${
            selectedFilter === "completed"
              ? "text-primary-100"
              : theme ? "hover:text-neutral-light-500" : "hover:text-neutral-dark-400"
          }`}
        >
          Completed
        </button>
      </div>
      <button onClick={() => clearCompleted()}  className={`${theme ? "hover:text-neutral-light-500" : "hover:text-neutral-dark-400"}`}>
        Clear Completed
      </button>
    </div>
  );
}
