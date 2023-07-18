import Wrapper from "./evyz@react-forms/wrapper/wrapper";
import { useEffect, useState } from "react";
import "./evyz@react-forms/index.css";
import "./evyz@react-forms-confirmed/index.css";
import {
  Button,
  Cell,
  Checkbox,
  Input,
  Popup,
  Row,
  Selectize,
  SwitchBox,
  TabContainer,
  Wrapper,
} from "./evyz@react-forms-confirmed";
import { Row, Cell } from "./evyz@react-forms/markup/markup";
import Input from "./evyz@react-forms/inputs/input";
import Button from "./evyz@react-forms/buttons/button";
import Grid from "./evyz@react-forms/grid/grid";
import Dropdown from "./evyz@react-forms/dropdown/dropdown";
import Tabcontainer from "./evyz@react-forms/tabcontainer/tabcontainer";
import FullSizeLoader from "./evyz@react-forms/loaders/fullSizeLoader";
import { Checkbox, SwitchBox } from "./evyz@react-forms/checkbox/checkbox";
import Wellcome from "./evyz@react-forms/Wellcome";
import Collapse from "./evyz@react-forms/collapse/collapse";
import Login from "./Login";
import Popup from "./evyz@react-forms/popup/popup";
import Calendar from "./evyz@react-forms/calendar/calendar";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import Paggination from "./evyz@react-forms/paggination/paggination";
import Alert from "./evyz@react-forms/alert/alert";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const [isOpened, setIsOpened] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [activeSlide, setActiveSlide] = useState({});

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
  const [currOption, setCurrOption] = useState(null);
  const [tabOptions, setTabOptions] = useState(null);

  const onClickHandler = (value) => {
    return value;
  };

  const [month, setMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [range, setRange] = useState([]);

  const alertSettings = {
    withTitle: true,
    // все значения типа string
    title: "Яйца братва", //Заголовок уведомления (optional)
    message:
      "Я оказался с пятью потными усатыми мужиками в ванной, задавайте вопросы", //Сообщения (required)
    xPosition: "right", //Положение на экране по оси Х. Возможные опции: left, center, right (required)
    yPosition: "top", //Положение на экране по оси Y. Возможные опции: top, bottom (required)
  };

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

  console.log("range =>", range);

  return (
    <Wrapper>
      <Row styles={{ justifyContent: "space-between" }}>
        <Popup state={{ active: isOpened, setActive: setIsOpened }}>
          1`23132`
        </Popup>
        <Cell gui={{ size: 5 }}>
          <Button events={{ onClick: () => setIsOpened(true) }}>
            Open Popup!
          </Button>
        </Cell>
        <Cell gui={{ size: 5 }}>
          <SwitchBox state={{ value: isClicked, setValue: setIsClicked }}>
            asdasd
          </SwitchBox>
        </Cell>
      </Row>
      <Row>
        <Cell gui={{ size: 11 }}>
          <TabContainer
            state={{ active: activeSlide, setActive: setActiveSlide }}
            gui={{
              components: [
                { id: 1, title: "Первый раздел", component: <h1>123</h1> },
                { id: 2, title: "Второй раздел", component: <h1>456</h1> },
              ],
            }}
          ></TabContainer>
        </Cell>
      </Row>
      <Alert settings={alertSettings} />
      <Paggination></Paggination>
    </Wrapper>
  );
}

export default App;
