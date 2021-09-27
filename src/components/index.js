import React, { useState } from "react";
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert.js";
import TodoList from "./TodoList";
import { RiHomeGearLine } from "react-icons/ri";
import { useHistory } from "react-router";

const TodoIndex = () => {
  const [value, setValue] = useState("");
  const history = useHistory();

  const onClick = () => {
    history.push("/");
  };

  return (
    <>
      <div>
        <TodoTemplate>
          <TodoInsert value={value} setValue={setValue} />
          <TodoList value={value} setValue={setValue} />
        </TodoTemplate>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <RiHomeGearLine
          onClick={onClick}
          style={{
            color: "#22b8cf",
            marginTop: "1rem",
            fontSize: "28",
            cursor: "pointer",
          }}
        />
      </div>
    </>
  );
};

export default TodoIndex;
