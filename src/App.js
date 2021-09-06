import "./App.css";
import Todos from "./components/Todos";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert.js";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
      <TodoTemplate>
        <TodoInsert />
        <TodoList />
      </TodoTemplate>
    </div>
  );
};

export default App;
