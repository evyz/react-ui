import React, { useEffect, useState } from "react";
import "./calendar.css";
import { Cell, Row } from "../markup/markup";
import Input from "../inputs/input";
import Button from "../buttons/button";

const refBookWithMonth = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабь"
]


const Calendar = ({ monthToShow, typeRender, onChangeMonthHandler, refBookOfMonths, date, onChangeDate }) => {

  const [matrix, setMatrix] = useState([])
  const [editMode, setEditMode] = useState({ type: null, value: null })
  const [value, setValue] = useState("")

  useEffect(() => {
    if (typeRender === "month") {

      let dates = []

      let checkDate = new Date(monthToShow),
        startOf = new Date(checkDate.getFullYear(), checkDate.getMonth(), 1),
        endOf = new Date(checkDate.getFullYear(), checkDate.getMonth() + 1, 0);
            
      let currentDate = startOf
      while (currentDate < endOf) {
        dates.push(currentDate)
        currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1)
      }

      let rows = []

      for (let date of dates) {
        let index = date.getDay() - 1
        if (!rows.length) {
          let newArr = []
          let prevMonthDays = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1)
          for (let i = 0; i < index; i++){
            newArr.push(prevMonthDays)
            prevMonthDays = new Date(prevMonthDays.getFullYear(), prevMonthDays.getMonth(), prevMonthDays.getDate() -1)
          }
          newArr.push(date)
          rows.push(newArr)
        } else {
          if (rows[rows.length - 1].length < 7) {
            if (!rows[rows.length - 1][index]) {
              rows[rows.length - 1].push(date)
            }
          } else {
            let newArr = [date]
            rows.push(newArr)
          }
        }
      }      

      if (rows[rows.length - 1].length < 7) {
        let endIteration = 7 - rows[rows.length - 1].length
        
        for (let i = 0; i < endIteration; i++){
          currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1)
          rows[rows.length - 1].push(currentDate)
        }
      }

      setMatrix(rows)
    }
  }, [monthToShow]);
 
  const switchMonthToShow = (moveTo, type) => {
    type = type || 'month'
    let newDate = new Date(new Date(monthToShow).getFullYear(), new Date(monthToShow).getMonth() + moveTo, 1)

    onChangeMonthHandler && onChangeMonthHandler(newDate)
  }

  const switchDate = (date) => {
onChangeDate && onChangeDate(date)
  }

  return (
    <div className={"system_calendar"}>
      {editMode?.type !== null &&
        <div className="popup">
          {editMode?.type === "year" &&
              <Row style={{alignItems: 'center', justifyContent: 'center'}}>
                <Cell style={{alignItems: 'center', justifyContent: 'center'}} size={6}>
                  <h2>Write year:</h2>
                  <Input value={value} setValue={setValue} />
                <Button onClick={() => {
                  let newDate = new Date(value, new Date(monthToShow).getMonth(), 1)
                  onChangeMonthHandler && onChangeMonthHandler(newDate)
                  setEditMode({type: null, value: null})
                }}>Confirm</Button>
                </Cell>
              </Row>
          }
        </div>
      }
      <div className="picker row">
        <button onClick={() => switchMonthToShow(-1)}>{"<"}</button>
        <div>
          <button>{monthToShow && refBookOfMonths ? refBookOfMonths[new Date(monthToShow).getMonth()] : refBookWithMonth[new Date(monthToShow).getMonth()]}</button>
          <button onClick={() => setEditMode({type: "year", value: null})}>{new Date(monthToShow).getFullYear()}</button>
        </div>
        <button onClick={() => switchMonthToShow(1)}>{">"}</button>
      </div>
      {matrix && matrix.length && matrix.map(row => 
        <div className="row">{row && row.length && row.map(item => 
          <div className={`cell ${new Date(item).getMonth() !== new Date(monthToShow).getMonth() ? "inactive" : ""} ${new Date(new Date(date).getFullYear(), new Date(date).getMonth(), new Date(date).getDate()).getTime() === new Date(new Date(item).getFullYear(), new Date(item).getMonth(), new Date(item).getDate()).getTime() ? 'active': ""}`}>{item &&  new Date(item).getDate()}</div>  
        )}</div>  
      )}
    </div>
  );
};

export default Calendar;
