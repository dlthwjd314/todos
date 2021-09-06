import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";
import { getTodo } from "../modules/todos";

const TodoList = () => {
  //useSelector로 getall 후 item map 돌리기
  const dispatch = useDispatch();
  const todos = dispatch(getTodo());
  console.log("todos", todos);
  return (
    <div className="TodoList">
      <TodoListItem />
    </div>
  );
};

export default TodoList;
