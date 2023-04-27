import Wrapper from "./evyz@react-forms/wrapper/wrapper";
import { useState } from "react";
import "./evyz@react-forms/index.css";
import { Row, Cell } from "./evyz@react-forms/markup/markup";
import Input from "./evyz@react-forms/inputs/input";
import Button from "./evyz@react-forms/buttons/button";
import Selectize from "./evyz@react-forms/inputs/selectize";
import Collapse from "./evyz@react-forms/collapse/collapse";

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

  const [errorPassword, setErrorPassword] = useState({
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
      <Row isFlex={true} flexParams={{ justifyContent: "center" }}>
        <Cell size={8}>
          <Input
            value={name}
            setValue={setName}
            error={errorName}
            setError={setErrorName}
            label={"Your name"}
            rules={{ notNull: true }}
          />
          <Input
            value={password}
            setValue={setPassword}
            error={errorPassword}
            setError={setErrorPassword}
            label={"Your password"}
            rules={{ notNull: true }}
          />

          <Button
            rulesToDeps={{ notNull: true }}
            deps={[name, password]}
            isLoading={isLoading}
            onClick={handler}
          >
            Log In
          </Button>

          <Collapse label={"Теги"}>
            <h1>Укажите теги:</h1>
            <Selectize
              label={"Заполните теги"}
              value={tags}
              setValue={setTags}
              rules={{ uniqueValues: true, prefix: "#" }}
            ></Selectize>
          </Collapse>

          <Button onClick={() => setIsDarkMode(!isDarkMode)}>
            Тёмная тема
          </Button>
        </Cell>
      </Row>
    </Wrapper>
  );
}

export default App;
