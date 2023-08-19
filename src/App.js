import { useEffect, useState } from "react";
import { Cell, Row, Wrapper } from "./src";

import "./src/styles/index.css";
import "./src/styles/widgets.css";
import Calendar from "./src/components/calendar/calendar";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      { id: 1, name: "Viktor", surname: "Alabaev", phone: "+7 999 999 99-99" },
      { id: 2, name: "Gleb", surname: "Shiskov", phone: "+7 999 999 99-99" },
      { id: 1, name: "Alesya", surname: "Burseva", phone: "+7 999 999 99-99" },
      {
        id: 1,
        name: "Yaroslav",
        surname: "Antonov",
        phone: "+7 999 999 99-99",
      },
      {
        id: 1,
        name: "Viktor",
        surname: "Viktorich",
        phone: "+7 999 999 99-99",
      },
    ]);
  }, []);

  return (
    <Wrapper enableClassNameBase>
      <Row enableClassNameBase>
        <Cell enableClassNameBase gui={{ size: 11 }}>
          <Calendar
            gui={{
              thead: {
                cols: [
                  {
                    id: 1,
                    value: "id",
                  },
                  { id: 2, value: "name" },
                  { id: 3, value: "surname" },
                  { id: 4, value: "phone" },
                ],
              },
            }}
            enableClassNameBase
            state={{ value: data }}
          ></Calendar>
        </Cell>
      </Row>
    </Wrapper>
  );
}

export default App;
