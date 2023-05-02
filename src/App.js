import Wrapper from "./evyz@react-forms/wrapper/wrapper";
import { useState } from "react";
import "./evyz@react-forms/index.css";
import { Row, Cell } from "./evyz@react-forms/markup/markup";
import Input from "./evyz@react-forms/inputs/input";
import Button from "./evyz@react-forms/buttons/button";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [name, setName] = useState("");
  return (
    <Wrapper useCoreConsole={true} isDarkMode={isDarkMode}>
      <Row>
        <Cell size={4}>
          <Input
            value={name}
            setValue={setName}
            type={"calendarpicker"}
            rules={{ showCurrentMonth: true }}
            enableLogs={true}
            label="Укажите дату"
          />
        </Cell>
      </Row>
      <Row>
        <Cell>
          <Button onClick={() => setIsDarkMode(!isDarkMode)}>
            Тёмная тема
          </Button>
        </Cell>
      </Row>
    </Wrapper>
  );
}

export default App;
