import Wrapper from "./evyz@react-forms-confirmed/wrapper/wrapper";
import "./evyz@react-forms-confirmed/index.css";
import Dropdown from "./evyz@react-forms-confirmed/dropdown";
import { useState } from "react";
import { Row } from "./evyz@react-forms-confirmed";

import './evyz@react-forms-confirmed/widgets.css'

function App() {

  const [active, setActive ] = useState({id: 1 ,name: "123"})

  return (
    <Wrapper>
      <Row>
        <Dropdown state={{value: active, setValue: setActive}} gui={{items: {state: [{id: 1 ,value: "123"}, {id: 2, value: '456'}]}}} />
      </Row>
    </Wrapper>
  );
}

export default App;
