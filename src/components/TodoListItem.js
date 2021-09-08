import React, { useCallback, useState } from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdCreate,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import "./TodoListItem.scss";
import cn from "classnames";
import { updateTodo, removeTodo } from "../modules/todos";

const TodoListItem = ({ todo }) => {
  const { description, checked, id } = todo;
  // console.log("checked", id, ":", checked);
  const [editValue, setEditValue] = useState();
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  const onRemove = useCallback(
    id => {
      dispatch(removeTodo(id));
    },
    [dispatch]
  );

  const onToggle = useCallback(
    id => {
      dispatch(updateTodo({ ...todo, checked: !checked }));
    },
    [todo]
  );

  const onChange = useCallback(e => {
    setEditValue(e.target.value);
  }, []);

  const onModify = useCallback(
    editValue => {
      dispatch(updateTodo({ ...todo, description: editValue }));
    },
    [todo]
  );

  const onSubmit = useCallback(
    e => {
      onModify(editValue);
      setEditValue("");
      setClicked(!clicked);
      e.preventDefault();
    },
    [onModify, editValue]
  );

  console.log("changed editValue", editValue);

  //onClick에 함수형으로 걸지않으면 무한으로 리렌더됨 주의주의!

  return (
    <div className="TodoListItem">
      <div className={cn("checkbox", { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </div>

      <div className={cn("textbox", { checked })}>
        {clicked ? (
          <form className="text" onSubmit={onSubmit}>
            <input defaultValue={description} onChange={onChange} />
          </form>
        ) : (
          <div className="text">{description}</div>
        )}
      </div>

      <div className="modify" onClick={() => setClicked(!clicked)}>
        <MdCreate />
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
