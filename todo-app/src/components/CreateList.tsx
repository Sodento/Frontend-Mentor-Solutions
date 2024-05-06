interface Props {
  theme: boolean;
  addTodo: (e:React.FormEvent<HTMLFormElement>) => void
  newTodo: string
  setNewTodo: React.Dispatch<React.SetStateAction<string>>
}

export default function CreateList({ theme, addTodo, newTodo, setNewTodo }: Props) {

  return (
    <div
      className={` flex w-full items-center p-4 rounded-md gap-4  ${
        theme ? "bg-neutral-light-100" : "bg-neutral-dark-200"
      }`}
    >
      <button className={`rounded-full w-6 h-6 border-2  hover:cursor-default ${theme ? "border-neutral-light-400" : "border-neutral-dark-500"}`}></button>
      <form className="w-full" onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Create a new todo..."
          className={`bg-transparent focus:outline-none w-full ${
            theme ? "text-neutral-light-500" : "text-neutral-dark-300"
          }`}
        />
      </form>
    </div>
  );
}
