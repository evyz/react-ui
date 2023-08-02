import Wrapper from "./evyz@react-forms-confirmed/wrapper/wrapper";
import "./evyz@react-forms-confirmed/index.css";
import Dropdown from "./evyz@react-forms-confirmed/dropdown";
import { useState } from "react";
import { Input, Row } from "./evyz@react-forms-confirmed";

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
              value: 'year.month'
            }
        }
      }, }}/>
    </Wrapper>
  );
}

export default App;
