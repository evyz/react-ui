import Wrapper from "./evyz@react-forms/wrapper/wrapper";
import { useState } from "react";
import "./evyz@react-forms/index.css";
import { Row, Cell } from "./evyz@react-forms/markup/markup";
import Input from "./evyz@react-forms/inputs/input";
import Button from "./evyz@react-forms/buttons/button";
import Grid from "./evyz@react-forms/grid/grid";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [gridFilter, setGridFilter] = useState({sort: {field: "title",value:"ASC"}})

  const [todos, setTodos] = useState([
  {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
    },
     {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
 {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
 {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
 {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
  ])

  const gridSettings = [{id:1, name: "Название", value:"title", isCanSort: true}, {id: 2, name: "Выполнено", value: "completed"}]

  return (
    <Wrapper useCoreConsole={true} isDarkMode={isDarkMode}>
      <Row>
        <Cell size={4}>
          <Input
            value={name}
            setValue={setName}
            type={"calendarpicker"}
            enableLogs={true}
            label="Укажите дату"
          />
           <Input
            value={password}
            setValue={setPassword}
            label="Укажите 123"
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
      <Row>
        <Cell size={11}>
          <Grid gridFilter={gridFilter} setGridFilter={setGridFilter} data={todos} gridSettings={gridSettings}></Grid>
        </Cell>
      </Row>
    </Wrapper>
  );
}

export default App;
