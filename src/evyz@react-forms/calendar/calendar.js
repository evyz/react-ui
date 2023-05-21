import React, { useEffect } from "react";
import "./calendar.css";

const Calendar = ({ monthToShow, typeRender }) => {
  useEffect(() => {
    if (typeRender === "month") {
      let checkDate = new Date(monthToShow),
        startOf = new Date(checkDate.getFullYear(), checkDate.getMonth(), 1),
        endOf = new Date(checkDate.getFullYear(), checkDate.getMonth(), 0);
    }
  }, [monthToShow]);

  return (
    <div className={"system_calendar"}>
      <h1>asd</h1>
    </div>
  );
};

export default Calendar;
