import React from "react";
import { useDispatch } from "react-redux";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";
import { useState, useCallback } from "react";
import { addTodo, todoSaga } from "../modules/todos";

const TodoInsert = props => {
  const { value, setValue } = props;

  const dispatch = useDispatch();

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onInsert = useCallback(
    value => {
      dispatch(
        addTodo({
          description: value,
          date: new Date().toString(),
        })
      );
    },
    [dispatch]
  );

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue(""); //value값 초기화
      //submit이벤트는 브라우저에서 새로고침 발생 따라서,
      e.preventDefault(); //-> 이 함수 호출.
    },
    [value] //이전 value값이 들어갈 수 있으므로 value값이 바뀔 때 마다
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      {/* onSubmit -> enter키도 감지 */}
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
