import { useState } from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

function App() {
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    setIsLight(() => !isLight);
  };

  return (
    <main
      className={`min-h-screen w-screen flex flex-col gap-12 items-center bg-contain bg-no-repeat ${
        isLight
          ? "bg-neutral-light-200 bg-[url(./images/bg-desktop-light.jpg)]"
          : "bg-neutral-dark-100 bg-[url(./images/bg-desktop-dark.jpg)]"
      }`}
    >
      <Header theme={isLight} onClick={toggleTheme} />
      <TodoItem theme={isLight} />
    </main>
  );
}

export default App;
