import React from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";
import { useState, useCallback } from "react";

const TodoInsert = () => {
  //useSelector로 insert
  const [value, setValue] = useState("");

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onInsert = useCallback(e => {});

  const onSubmit = useCallback(
    e => {
      //onInsert(value);
      setValue(""); //value값 초기화
      //submit이벤트는 브라우저에서 새로고침 발생 따라서,
      e.preventDefault(); //-> 이 함수 호출.
    },
    [onInsert, value]
  );

  console.log("value", value);

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
