import Wrapper from "./evyz@react-forms/wrapper/wrapper";
import { useState } from "react";
import "./evyz@react-forms/index.css";
import { Row, Cell } from "./evyz@react-forms/markup/markup";
import Input from "./evyz@react-forms/inputs/input";
import Button from "./evyz@react-forms/buttons/button";
import Selectize from "./evyz@react-forms/inputs/selectize";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [tags, setTags] = useState([]);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [errorName, setErrorName] = useState({
    status: false,
    message: "its okay",
  });

  const handler = () => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("ended");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Wrapper useCoreConsole={true} isDarkMode={isDarkMode}>
      <Row>
        {/* <Cell size={5}>
          <Selectize value={tags} setValue={setTags} />
        </Cell>
        <Cell size={5}></Cell> */}
        <Cell size={11}>
          <h1>Авторизация!</h1>

          <Input
            value={name}
            setValue={setName}
            label={"Введите имя"}
            rules={{ notNull: true }}
            error={errorName}
            setError={setErrorName}
          />
          <Input
            value={password}
            setValue={setPassword}
            label={"Введите пароль"}
          />

          <Button
            rulesToDeps={{ notNull: true }}
            deps={[name, password]}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            onClick={handler}
          >
            Войти
          </Button>

          <Button onClick={() => setIsDarkMode(!isDarkMode)}>
            Тёмная тема
          </Button>
        </Cell>
      </Row>
    </Wrapper>
  );
}

export default App;
