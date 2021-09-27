import "./App.css";
import { Route } from "react-router-dom";
import TodoCalendar from "./components/TodoCalendar";
import TodoIndex from "./components";

const App = () => {
  return (
    <div>
      <Route exact path="/" component={TodoCalendar} />
      <Route exact path="/todo/:date" component={TodoIndex} />
    </div>
  );
};

export default App;
