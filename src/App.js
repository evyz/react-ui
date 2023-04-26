import { Cell, Row } from "./evyz@react-forms/markup/markup";
import Wrapper from "./evyz@react-forms/wrapper/wrapper";
import {  useState } from "react";
import "./evyz@react-forms/index.css";
import Input from "./evyz@react-forms/inputs/input";
import Button from "./evyz@react-forms/buttons/button";
import Popup from "./evyz@react-forms/popup/popup";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [name, setName] = useState("");
  const [errorSearchValue, setErrorSearchValue] = useState({});
  const [errorName, setErrorName] = useState({});

  const [isActivePopup, setIsActivePopup] = useState(false);

  const [isLoadingButton, setIsLoadingButton] = useState(false)

  const method =( ) => {
    setIsLoadingButton(true)
    setTimeout(() => {
      setIsLoadingButton(false)
    }, 1000)
  }

  return (
    <Wrapper useCoreConsole={true} isDarkMode={isDarkMode}>

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
              rules={{ notNull: true }}
              error={errorSearchValue}
              setError={setErrorSearchValue}
            />
            <Input
              value={name}
              setValue={setName}
              label={"Введите имя"}
              error={errorName}
              setError={setErrorName}
              rules={{ notNull: true }}
            />
            <Button onClick={method} useLocalLoader={false} isLoading={isLoadingButton} setIsLoading={setIsLoadingButton} deps={[searchValue, name]} rulesToDeps={{ notNull: true }}>
              Найти
            </Button>
            <Row>
              <Button onClick={() => setIsDarkMode(!isDarkMode)}>
                Тёмная тема
              </Button>
            </Row>
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
      <Row>
        <Cell size={12}>
          <h1>Рекламный баннер</h1>
          <desc>траляляля</desc>
        </Cell>
      </Row>
    </Wrapper>
  );
}

export default App;
