import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";
import { getTodo } from "../modules/todos";

const TodoList = props => {
  const { value, setValue } = props;
  const todos = useSelector(state => state.reducer.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  // console.log("todos111", todos);
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          value={value}
          setValue={setValue}
        />
      ))}
    </div>
  );
};

export default TodoList;
