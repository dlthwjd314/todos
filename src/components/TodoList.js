import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";
import { getTodo, getTodoDate } from "../modules/todos";

const TodoList = props => {
  const { value, setValue } = props;
  const todos = useSelector(state => state.reducer.todos);
  const { date } = useParams();

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getTodo());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(getTodoDate(date));
  }, [dispatch]);

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
