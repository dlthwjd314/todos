import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert.js";
import TodoList from "./components/TodoList";
import { useState } from "react";
import PickDate from "./components/DatePicker";

const App = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <PickDate />
      <TodoTemplate>
        <TodoInsert value={value} setValue={setValue} />
        <TodoList value={value} setValue={setValue} />
      </TodoTemplate>
    </div>
  );
};

export default App;
