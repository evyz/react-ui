import Wrapper from "./evyz@react-forms/wrapper/wrapper";
import { useEffect, useState } from "react";
import "./evyz@react-forms/index.css";
import { Row, Cell } from "./evyz@react-forms/markup/markup";
import Input from "./evyz@react-forms/inputs/input";
import Button from "./evyz@react-forms/buttons/button";
import Grid from "./evyz@react-forms/grid/grid";
import Dropdown from "./evyz@react-forms/dropdown/dropdown";
import FullSizeLoader from "./evyz@react-forms/loaders/fullSizeLoader";
import {Checkbox, SwitchBox} from "./evyz@react-forms/checkbox/checkbox";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [gridFilter, setGridFilter] = useState({
    sort: { field: "title", value: "ASC" },
  });

  const [isSelected, setIsSelected] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [todos, setTodos] = useState([]);
  const [options, setOptions] = useState([
    { id: 0, value: "Бегит" },
    { id: 1, value: "Пресс качат" },
    { id: 2, value: "Анжуманя" },
    { id: 3, value: "Турники ломат" },
    { id: 4, value: "Яйца помыт" },
    { id: 5, value: "Гречка навалит" },
  ]);

  useEffect(() => {
    setIsLoading(true);
    console.log("gridFilter => ", gridFilter);
    setTimeout(() => {
      let arr = [
        {
          userId: 1,
          id: 1,
          title: "Поесть бебры",
          completed: true,
        },
        {
          userId: 1,
          id: 1,
          title: "drunk vodka",
          completed: false,
        },
        {
          userId: 1,
          id: 1,
          title: "meet with bear",
          completed: true,
        },
        {
          userId: 1,
          id: 1,
          title: "buy matryoshka",
          completed: false,
        },
        {
          userId: 1,
          id: 1,
          title: "take a tickets to Moscow",
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

      if (gridFilter?.fastSearch) {
        arr = arr.filter((item) =>
          item?.title.indexOf(gridFilter?.fastSearch?.value) !== -1
            ? true
            : false
        );
      }

      setTodos(arr);
      setIsLoading(false);
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

  return (
    <Wrapper useCoreConsole={true} isDarkMode={isDarkMode}>
      <FullSizeLoader label={"Загрузка, подождите пожалуйста..."} value={isLoading} setValue={setIsLoading} backgroundOpacity={0.5} >
      </FullSizeLoader>
      <Row>
        <Cell size={11}>
          <Dropdown
            styleRules={{ isModalOptions: true }}
            rules={{ closeAfterSomeChanges: true }}
            options={options}
            defaultValue={`Things my Войтенко does`}
            label={"Укажите свой гендер:"}
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
            label='Укажите дату'
          />
          <Input value={password} setValue={setPassword} label='Укажите 123' />
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
            isLoading={isLoading}
            gridFilter={gridFilter}
            setGridFilter={setGridFilter}
            data={todos}
            gridSettings={gridSettings}
          ></Grid>
        </Cell>
      </Row>
      <Row>
        <Cell size={11}>
          <SwitchBox
            value={isSelected}
            setValue={setIsSelected}
          >
            Является говном
          </SwitchBox>
        </Cell>
      </Row>
    </Wrapper>
  );
}

export default App;
