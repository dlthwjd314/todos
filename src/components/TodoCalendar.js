import React, { useState } from "react";
import { getDay } from "date-fns";
import { ko } from "date-fns/locale";
import { Calendar, DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

export default function TodoCalendar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const style = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const styleCal = {
    width: "720px",
    borderRadius: "10px",
    border: "2px solid #22b8cf",
  };

  //console.log("get Week: ", );

  const modifiers = {
    red: date => getDay(date) === 0, //red Sundays
    blue: date => getDay(date) === 6, //blue Saturdays
  };

  const modifierClassNames = {
    red: "-red",
    blue: "-blue",
  };

  const [date, setDate] = useState();
  console.log(
    "date of Calendar :",
    date
    //.toString().subString(0, 15).replace(/(\s*)/g, "")
  );

  const treamString = date => {
    return date.toString().substring(0, 15).replace(/ /g, "");
  };

  const onDateClick = date => {
    history.push(`/todo/${date.toString().substring(0, 15).replace(/ /g, "")}`);
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "40%",
          top: "5%",
          color: "#495057",
          fontStyle: "italic",
          fontSize: 20,
        }}
      >
        Hit you with that Todo Todo Todo
      </div>
      <div style={style}>
        <div style={styleCal}>
          {/* <DatePickerCalendar
            //onDayClick={onDateClick}
            date={date}
            onDateChange={(setDate, onDateClick)}
            locale={ko}
            modifiers={modifiers}
            modifiersClassNames={modifierClassNames}
          /> */}
          <Calendar
            onDayClick={onDateClick}
            modifiers={modifiers}
            modifierClassNames={modifierClassNames}
          />
        </div>
      </div>
    </>
  );
}
