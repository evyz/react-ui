import Wrapper from "./evyz@react-forms-confirmed/wrapper/wrapper";
import "./evyz@react-forms-confirmed/index.css";
import { useState } from "react";

import './evyz@react-forms-confirmed/widgets.css'
import DatePicker from "./evyz@react-forms-confirmed/datepicker/datepicker";

function App() {

  const [active, setActive ] = useState(new Date())

  return (
    <Wrapper>
      <DatePicker gui={{
        dates: {
          renderDate: {
            value: new Date(),
            format: {
              value: "month year y."
            }
        }
      }, }}/>
    </Wrapper>
  );
}

export default App;
