import Wrapper from "./evyz@react-forms/wrapper/wrapper";
import { useEffect, useState } from "react";
import "./evyz@react-forms/index.css";
import { Row, Cell } from "./evyz@react-forms/markup/markup";
import Input from "./evyz@react-forms/inputs/input";
import Button from "./evyz@react-forms/buttons/button";
import Grid from "./evyz@react-forms/grid/grid";
import Dropdown from "./evyz@react-forms/dropdown/dropdown";
import FullSizeLoader from "./evyz@react-forms/loaders/fullSizeLoader";
import { Checkbox, SwitchBox } from "./evyz@react-forms/checkbox/checkbox";
import Wellcome from "./evyz@react-forms/Wellcome";
import Collapse from "./evyz@react-forms/collapse/collapse";
import Login from "./Login";
import Popup from "./evyz@react-forms/popup/popup";
import Calendar from "./evyz@react-forms/calendar/calendar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [gridFilter, setGridFilter] = useState({
    sort: { field: "title", value: "ASC" },
  });

  const [isSelected, setIsSelected] = useState(false);
  const [path, setPath] = useState("/");

  const [isLoading, setIsLoading] = useState(false);
  const [isGridLoading, setIsGridLoading] = useState(false);

  const [todos, setTodos] = useState([]);
  const [options, setOptions] = useState([
    { id: 0, value: "Заняться спортом" },
    { id: 1, value: "Купить хлеба" },
  ]);

  useEffect(() => {
    setIsGridLoading(true);
    setTimeout(() => {
      let arr = [
        {
          userId: 1,
          id: 1,
          title: "Купить хлеба",
          completed: true,
        },
        {
          userId: 1,
          id: 1,
          title: "Купить воды",
          completed: false,
        },
      ];

      if (gridFilter?.sort?.field === "completed") {
        arr = arr.sort((x, y) =>
          gridFilter?.sort?.value === "ASC"
            ? x?.completed - y?.completed
            : y?.completed - x?.completed
        );
      }

      if (gridFilter?.fastSearch?.value) {
        arr = arr.filter((item) =>
          item?.title.indexOf(gridFilter?.fastSearch?.value) !== -1
            ? true
            : false
        );
      }

      setTodos(arr);
      setIsGridLoading(false);
    }, 1000);
  }, [gridFilter]);

  const gridSettings = [
    { id: 1, name: "Название", value: "title", isCanSort: true },
    {
      id: 2,
      name: "Выполнено",
      value: "completed",
      widget: "checkbox",
      isCanSort: true,
    },
  ];

  if (path === "/login") {
    return <Login />;
  }

  if (isSelected) {
    return <Wellcome></Wellcome>;
  }

  return (
    <Wrapper useCoreConsole={true} isDarkMode={isDarkMode}>
      <Button onClick={() => setPath("/login")}>Авторизация</Button>
      <FullSizeLoader
        label={"Загрузка, подождите пожалуйста..."}
        value={isLoading}
        setValue={setIsLoading}
        backgroundOpacity={0.5}
      ></FullSizeLoader>
      <Row>
        <Cell size={11}>
          <Dropdown
            styleRules={{ isModalOptions: true }}
            rules={{ closeAfterSomeChanges: true }}
            options={options}
            defaultValue={`Нужно выполнить:`}
            label={"Укажите цель:"}
          />
        </Cell>
      </Row>
      <Row>
        <Cell size={4}>
          <Input
            value={name}
            setValue={setName}
            type={"calendarpicker"}
            enableLogs={true}
            label="Укажите дату"
          />
          <Input value={password} setValue={setPassword} label="Укажите 123" />
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
          <Grid
            isHasFastSearch={true}
            isLoading={isGridLoading}
            gridFilter={gridFilter}
            setGridFilter={setGridFilter}
            data={todos}
            gridSettings={gridSettings}
            enableDebounce={true}
          ></Grid>
        </Cell>
      </Row>
      <Row>
        <Cell size={11}>
          <SwitchBox value={isSelected} setValue={setIsSelected}>
            Is selected value
          </SwitchBox>
        </Cell>
      </Row>

      <Row>
        <Collapse label={"Новости:"}>
          <Row>
            <Cell size={3}>
              <h1>Wellcome!</h1>
            </Cell>
            <Cell size={3}>
              <h1>Wellcome!</h1>
            </Cell>
            <Cell size={3}>
              <h1>Wellcome!</h1>
            </Cell>
          </Row>
        </Collapse>
      </Row>
      <Row>
        <Cell size={11}>
          <Calendar></Calendar>
        </Cell>
      </Row>
    </Wrapper>
  );
}

export default App;
