import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PickDate = () => {
  const [pickDate, setPickDate] = useState();

  return (
    <div>
      <DatePicker selected={pickDate} onChange={date => setPickDate(date)} />
    </div>
  );
};

export default PickDate;
