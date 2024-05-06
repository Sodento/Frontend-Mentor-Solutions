import { useMemo, useState } from "react";
import CreateList from "./CreateList";

import iconCross from "../images/icon-cross.svg";
import iconCheck from "../images/icon-check.svg";
import Filter from "./Filter";

interface Props {
  theme: boolean;
}

interface TodoItems {
  id: string;
  text: string;
  completed: boolean;
}

export default function TodoItem({ theme }: Props) {
  const [todos, setTodos] = useState<TodoItems[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [counterLeft, setCounterLeft] = useState<number>(0);
  const [filter, setFilter] = useState<string>("All");

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo !== "") {
      const newId = crypto.randomUUID();
      const newTodoItem: TodoItems = {
        id: newId,
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
      setCounterLeft((prevValue) => prevValue + 1);
    }
  };

  const removeTodo = (id: string) => {
    const removedTodo = todos.find((todo) => todo.id === id);
    console.log("removed");
    if (!(removeTodo !== undefined && removedTodo?.completed)) {
      setCounterLeft((prevValue) => prevValue - 1);
    }
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos);
  };

  const clearCompleted = () => {
    const updateTodos = todos.filter((todo) => !todo.completed);
    setTodos(updateTodos);
  };

  const toggleComplete = (id: string) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        const completed = !todo.completed;
        setCounterLeft((prevValue) => {
          if (!completed) return prevValue + 1;
          return prevValue - 1;
        });
        return { ...todo, completed };
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  const filteredTodos = useMemo(() => {
    if (filter === "active") return todos.filter((todo) => !todo.completed);
    else if (filter === "completed")
      return todos.filter((todo) => todo.completed);
    return todos;
  }, [todos, filter]);

  return (
    <div className=" flex flex-col items-center w-2/5 justify-center gap-8">
      <CreateList
        theme={theme}
        addTodo={addTodo}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
      />

      <div
        className={`flex flex-col rounded-md w-full mb-8  ${
          theme ? "bg-neutral-light-100" : "bg-neutral-dark-200"
        }`}
      >
        {filteredTodos.map((todo) => (
          <div
            key={todo.id}
            className={`group flex justify-between p-4 items-center border-b-[0.05rem]  ${
              theme ? "border-neutral-light-400" : "border-neutral-dark-500"
            }`}
          >
            <div className="flex gap-4 items-center ">
              <button
                onClick={() => toggleComplete(todo.id)}
                className={`h-6 w-6 rounded-full ${
                  theme
                    ? "border-neutral-light-400 hover:gradient-border"
                    : "border-neutral-dark-500 "
                }
              ${
                todo.completed
                  ? "bg-gradient-to-tl from-primary-200 to-primary-300 "
                  : "border-neutral-light-400 border-2"
              }   `}
              >
                <img
                  src={todo.completed && iconCheck}
                  alt=""
                  className="m-auto"
                />
              </button>
              <p
                onClick={() => toggleComplete(todo.id)}
                className={`hover:cursor-pointer ${
                  theme ? "text-neutral-light-500" : "text-neutral-dark-300"
                } ${todo.completed ? "line-through opacity-50" : ""} `}
              >
                {todo.text}
              </p>
            </div>
            <button
              onClick={() => {
                removeTodo(todo.id);
              }}
              className="h-4 w-4 hidden group-hover:block"
            >
              <img src={iconCross} alt="cross"></img>
            </button>
          </div>
        ))}
        <Filter
          theme={theme}
          counter={counterLeft}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
        />
      </div>
    </div>
  );
}
