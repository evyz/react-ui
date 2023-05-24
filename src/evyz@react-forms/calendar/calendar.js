import React, { useEffect, useState } from "react";
import "./calendar.css";
import { Cell, Row } from "../markup/markup";
import Input from "../inputs/input";
import Button from "../buttons/button";

const CalendarCell = ({item, rangeIsEnabled, rangeDates, monthToShow, switchDate,date }) => {
  return (
    <div
      date-value={`${new Date(item).getFullYear()}-${new Date(item).getMonth() < 10 ? '0' + new Date(item).getMonth() : new Date(item).getMonth()}-${new Date(item).getDate()}T${new Date(item).getHours()}:${new Date(item).getMinutes()}:${new Date().getSeconds()}`}
      onClick={() => switchDate(item)}
      className={`cell ${
        new Date(item).getMonth() !==
        new Date(monthToShow).getMonth()
          ?  "inactive"
          : ""
      } ${
        rangeIsEnabled && rangeDates.length > 1
          ? new Date(rangeDates[0]).getDate() <
              new Date(item).getDate() &&
            new Date(item).getDate() <
              new Date(rangeDates[1]).getDate()
            ? "section_range"
            : ""
          : ""
        }  ${
        rangeIsEnabled ?
          rangeDates?.length > 1 ?
        new Date(
          new Date(rangeDates[0]).getFullYear(),
          new Date(rangeDates[0]).getMonth(),
          new Date(rangeDates[0]).getDate()
        ).getTime() === new Date(
          new Date(item).getFullYear(),
          new Date(item).getMonth(),
          new Date(item).getDate()
        ).getTime() ? 'active range start' : new Date(
          new Date(rangeDates[1]).getFullYear(),
          new Date(rangeDates[1]).getMonth(),
          new Date(rangeDates[1]).getDate()
        ).getTime() === new Date(
          new Date(item).getFullYear(),
          new Date(item).getMonth(),
          new Date(item).getDate()
        ).getTime() ? 'active range end' : '' :  new Date(
          new Date(date).getFullYear(),
          new Date(date).getMonth(),
          new Date(date).getDate()
        ).getTime() ===
        new Date(
          new Date(item).getFullYear(),
          new Date(item).getMonth(),
          new Date(item).getDate()
        ).getTime() 
        ? !rangeIsEnabled && "active"
          : ""
        : new Date(
          new Date(date).getFullYear(),
          new Date(date).getMonth(),
          new Date(date).getDate()
        ).getTime() ===
        new Date(
          new Date(item).getFullYear(),
          new Date(item).getMonth(),
          new Date(item).getDate()
        ).getTime() ?'active':  ''
      }`}
    >
      {item && new Date(item).getDate()}
    </div>
)
} 

const refBookWithMonth = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабь",
];

const refBookWithDaysOfWeekSystem = [
  "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"
]

const Calendar = ({
  monthToShow,
  typeRender,
  onChangeMonthHandler,
  refBookOfMonths,
  refBookOfDaysOfWeek,
  date,
  rangeDates,
  onChangeDate,
  onChangeRangeData,
  rules,
}) => {
  const [matrix, setMatrix] = useState([]);
  const [editMode, setEditMode] = useState({ type: null, value: null });
  const [value, setValue] = useState("");

  const [isInitedMatrix, setIsInitedMatrix] = useState(false)

  useEffect(() => {
    setIsInitedMatrix(false)
    if (typeRender === "month") {
      let dates = [];

      let checkDate = new Date(new Date(monthToShow).getFullYear(), new Date(monthToShow).getMonth(), new Date(monthToShow).getDate()),
        startOf = new Date(checkDate.getFullYear(), checkDate.getMonth(), 1),
        endOf = new Date(checkDate.getFullYear(), checkDate.getMonth() + 1, 0);

      let currentDate = startOf;
      while (currentDate < endOf) {
        dates.push(currentDate);
        currentDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() + 1
        );
      }

      let rows = [];

      for (let date of dates) {
        let index = date.getDay() - 1;
        if (!rows.length) {
          let newArr = [];
          let prevMonthDays = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() - 1,
            0
          );
          for (let i = 0; i < index; i++) {
            newArr.push(prevMonthDays);
            prevMonthDays = new Date(
              prevMonthDays.getFullYear(),
              prevMonthDays.getMonth(),
              prevMonthDays.getDate() - 1
            );
          }
          newArr.push(date);
          rows.push(newArr);
        } else {
          if (rows[rows.length - 1].length < 7) {
            if (!rows[rows.length - 1][index]) {
              rows[rows.length - 1].push(date);
            }
          } else {
            let newArr = [date];
            rows.push(newArr);
          }
        }
      }

      if (rows[rows.length - 1].length < 7) {
        let endIteration = 7 - rows[rows.length - 1].length;

        for (let i = 0; i < endIteration; i++) {
          currentDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate() + 1
          );
          rows[rows.length - 1].push(currentDate);
        }
      }

      setMatrix(rows);
    }

    setIsInitedMatrix(true)
  }, [monthToShow, typeRender]);

  const switchMonthToShow = (moveTo, type) => {
    type = type || "month";
    let newDate = new Date(
      new Date(monthToShow).getFullYear(),
      new Date(monthToShow).getMonth() + moveTo,
      1
    );

    onChangeMonthHandler && onChangeMonthHandler(newDate);
  };

  const switchDate = (date) => {
    let year = new Date(date).getFullYear(),
      month = new Date(date).getMonth(),
      day = new Date(date).getDate();
    if (rules?.enableRage) {
      onChangeRangeData && onChangeRangeData(new Date(year, month, day));
      return;
    }

    onChangeDate && onChangeDate(new Date(year, month, day));
  };

  console.log('rules', rules)

  return (
    <div className={"system_calendar"}>
      {editMode?.type !== null && (
        <div className="popup">
          {editMode?.type === "year" && (
            <Row style={{ alignItems: "center", justifyContent: "center" }}>
              <Cell
                style={{ alignItems: "center", justifyContent: "center" }}
                size={6}
              >
                <h2>Write year:</h2>
                <Input value={value} setValue={setValue} />
                <Button
                  onClick={() => {
                    let newDate = new Date(
                      value,
                      new Date(monthToShow).getMonth(),
                      1
                    );
                    onChangeMonthHandler && onChangeMonthHandler(newDate);
                    setEditMode({ type: null, value: null });
                  }}
                >
                  Confirm
                </Button>
              </Cell>
            </Row>
          )}
        </div>
      )}
      <div className="picker row">
        <button onClick={() => switchMonthToShow(-1)}>{"<"}</button>
        <div>
          <button>
            {monthToShow && refBookOfMonths
              ? refBookOfMonths[new Date(monthToShow).getMonth()]
              : refBookWithMonth[new Date(monthToShow).getMonth()]}
          </button>
          <button onClick={() => setEditMode({ type: "year", value: null })}>
            {new Date(monthToShow).getFullYear()}
          </button>
        </div>
        <button onClick={() => switchMonthToShow(1)}>{">"}</button>
      </div>
      <div className="row days_of_week">
           {refBookOfDaysOfWeek && refBookOfDaysOfWeek.length > 0 && refBookOfDaysOfWeek.length < 8 ? <></> : 
        refBookWithDaysOfWeekSystem.map(day => 
          <div className="cell">{day}</div>
        )
      }
      </div>
      {isInitedMatrix && matrix &&
        matrix.length &&
        matrix.map((row) => (
          <div className="row">
            {row &&
              row.length &&
              row.map((item) => ( 
                  <CalendarCell switchDate={switchDate} date={date} item={item} rangeDates={rangeDates} rangeIsEnabled={rules?.enableRage} monthToShow={monthToShow} />
              ))}
          </div>
        ))}
    </div>
  );
};

export default Calendar;
