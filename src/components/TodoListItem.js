import React, { useCallback } from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import "./TodoListItem.scss";

const TodoListItem = () => {
  //map 돌려서 받은 애들 아이디로 바아로 삭제
  //   const onRemove = useCallback()=>{

  //   };

  //   const onToggle = useCallback()=>{

  //   };
  return (
    <div className="TodoListItem">
      <div className="checkbox">
        <MdCheckBoxOutlineBlank />
        <div className="text">할 일</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
