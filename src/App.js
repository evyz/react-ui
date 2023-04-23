import { Cell, Row } from "./evyz@react-forms/markup/markup";
import Wrapper from "./evyz@react-forms/wrapper/wrapper";
import { useEffect, useState } from "react";
import "./evyz@react-forms/index.css";
import Input from "./evyz@react-forms/inputs/input";
import Button from "./evyz@react-forms/buttons/button";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  return (
    <Wrapper isDarkMode={isDarkMode}>
      <Row>
        <Cell size={4}>
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
          <Row>
            <Cell
              style={{ border: "1px solid var(--main-input-color)" }}
              size={4}
            >
              <h1>Новость</h1>
              <desc>Описание описание описание</desc>
              <Button>Открыть</Button>
            </Cell>
            <Cell
              style={{ border: "1px solid var(--main-input-color)" }}
              size={4}
            >
              <h1>Новость</h1>
              <desc>Описание описание описание</desc>
              <Button>Открыть</Button>
            </Cell>
            <Cell
              style={{ border: "1px solid var(--main-input-color)" }}
              size={4}
            >
              <h1>Новость</h1>
              <desc>Описание описание описание</desc>
              <Button>Открыть</Button>
            </Cell>
          </Row>
        </Cell>
      </Row>
    </Wrapper>
  );
}

export default App;
