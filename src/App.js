import { Cell, Row } from "./evyz@react-forms/markup/markup";
import Wrapper from "./evyz@react-forms/wrapper/wrapper";
import { useEffect, useState } from "react";
import "./evyz@react-forms/index.css";
import Input from "./evyz@react-forms/inputs/input";
import Button from "./evyz@react-forms/buttons/button";
import Popup from "./evyz@react-forms/popup/popup";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isActivePopup, setIsActivePopup] = useState(false);

  return (
    <Wrapper isDarkMode={isDarkMode}>
      <Popup isActive={isActivePopup} setIsActive={setIsActivePopup}>
        123
      </Popup>
      <Row>
        <Cell size={2}>
          <Row>
            <Input
              value={searchValue}
              setValue={setSearchValue}
              label={"Поиск по сайту"}
            />
            <Button onClick={() => setIsDarkMode(!isDarkMode)}>
              Тёмная тема
            </Button>
          </Row>
        </Cell>
        <Cell size={8}>
          <Row className={"j-between"}>
            <Cell
              style={{ border: "1px solid var(--main-input-color)" }}
              size={3}
            >
              <h1>Новость</h1>
              <desc>Описание описание описание</desc>
              <Button onClick={() => setIsActivePopup(true)}>Открыть</Button>
            </Cell>
            <Cell
              style={{ border: "1px solid var(--main-input-color)" }}
              size={3}
            >
              <h1>Новость</h1>
              <desc>Описание описание описание</desc>
              <Button onClick={() => setIsActivePopup(true)}>Открыть</Button>
            </Cell>
            <Cell
              style={{ border: "1px solid var(--main-input-color)" }}
              size={3}
            >
              <h1>Новость</h1>
              <desc>Описание описание описание</desc>
              <Button onClick={() => setIsActivePopup(true)}>Открыть</Button>
            </Cell>
          </Row>
        </Cell>
      </Row>
    </Wrapper>
  );
}

export default App;
