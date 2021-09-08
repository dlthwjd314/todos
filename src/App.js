import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert.js";
import TodoList from "./components/TodoList";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <TodoTemplate>
        <TodoInsert value={value} setValue={setValue} />
        <TodoList value={value} setValue={setValue} />
      </TodoTemplate>
    </div>
  );
};

export default App;
