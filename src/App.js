import Wrapper from "./evyz@react-forms/wrapper/wrapper";
import { useEffect, useState } from "react";
import "./evyz@react-forms/index.css";
import { Row } from "./evyz@react-forms/markup/markup";
import Cell from './evyz@react-forms-confirmed/cell/cell.tsx'
import Input from "./evyz@react-forms-confirmed/input/input.tsx";
import Button from "./evyz@react-forms-confirmed/button/button.tsx";
import Grid from "./evyz@react-forms/grid/grid";
import Dropdown from "./evyz@react-forms/dropdown/dropdown";
import Tabcontainer from "./evyz@react-forms/tabcontainer/tabcontainer";
import FullSizeLoader from "./evyz@react-forms/loaders/fullSizeLoader";
import { SwitchBox } from "./evyz@react-forms/checkbox/checkbox.tsx";
import Wellcome from "./evyz@react-forms/Wellcome";
import Collapse from "./evyz@react-forms/collapse/collapse";
import Login from "./Login";
import Calendar from "./evyz@react-forms/calendar/calendar";
import Paggination from "./evyz@react-forms/paggination/paggination";
import Tree from "./evyz@react-forms/tree/tree";
import FileUploader from "./evyz@react-forms/file-uploader/fileUploader";
import Popup from "./evyz@react-forms-confirmed/popup/popup.tsx";

const treeData = [
  {
    id: 1, name: "1", childs: [
      {
        id: 2, name: "1.1", childs: [
      {id: 6, name: "1.1.1"},
      {id: 6, name: "1.1.2"},
      {id: 6, name: "1.1.3"},
    ]},
    {id: 3 , name: "1.2"},
    {id: 4 , name: "1.3"},
    {id: 5 , name: "1.4"},
    ],
  },
  {
    id: 1, name: "2", childs: [
    {id: 2 , name: "2.1"},
    {id: 3 , name: "2.2"},
    {id: 4 , name: "2.3"},
    {id: 5 , name: "2.4"},
    ],
  }
]

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
  const [currOption, setCurrOption] = useState(null);
  const [tabOptions, setTabOptions] = useState(null);

  const [isOpened, setIsOpened ] = useState(true)

  const [files, setFiles] = useState([])


  const onClickHandler = (value) => {
    return value;
  };

  const [month, setMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [range, setRange] = useState([]);

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

      <Popup state={{active: isOpened}} onCloseWindow={(e) => setIsOpened(false)}></Popup>

      <Row>
        <Cell gui={{size: 6}}>
         <FileUploader onUploadFile={(file) => setFiles(prev => [...prev, file])} options={{showImage: true}}></FileUploader>
        </Cell>
        <Cell gui={{size: 4}}>
          { files && files.map(file => 
            <Row>
              {file.picSrc && <img style={{ height: 40 }} src={file.picSrc} />}
              <span>{ file?.name}</span>
            </Row>
          )}
        </Cell>
      </Row>

      <Cell gui={{size: 6}}>
        <Tree data={treeData}></Tree>
      </Cell>

      <Button events={{onClick: () => setPath("/login")}}>Авторизация</Button>
      <FullSizeLoader
        label={"Загрузка, подождите пожалуйста..."}
        value={isLoading}
        setValue={setIsLoading}
        backgroundOpacity={0.5}
      ></FullSizeLoader>
      <Row>
        <Cell gui={{size: 11}}>
          <Dropdown
            styleRules={{ isModalOptions: true }}
            rules={{ closeAfterSomeChanges: true }}
            options={options}
            defaultValue={`Нужно выполнить:`}
            label={"Укажите цель:"}
            currOption={currOption}
            setCurrOption={setCurrOption}
            onClickHandler={onClickHandler}
          />
        </Cell>
      </Row>
      <Row>
        <Cell gui={{size: 4}}>
          <Input
            state={{value: name, setValue: setName}}
            gui={{ label: "Укажите дату" }}
          />
          <Input value={password} setValue={setPassword} label="Укажите 123" />
        </Cell>
      </Row>
      <Row>
        <Cell>
          <Button events={{onClick: () => setIsDarkMode(!isDarkMode)}} >
            Тёмная тема
          </Button>
        </Cell>
      </Row>
      <Row>
        <Cell gui={{size:11}}>
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

      <Row style={{ marginTop: "20px" }}>
        <Tabcontainer chapters={[{ id: 1, title: "Первый раздел", elem: <div>12345</div> }, {
          id: 2, title: "Второй раздел", elem: <div>
          <h1>Бебрулья</h1>
          </div>, onBeforeInit: function () { console.log('beforeInit') }
}]} setTabOptions={setTabOptions} />
      </Row>
      <Row>
        <Cell gui={{size: 11}}>
          <SwitchBox value={isSelected} setValue={setIsSelected}>
            Is selected value
          </SwitchBox>
        </Cell>
      </Row>

      <Row>
        <Collapse label={"Новости:"}>
          <Row>
            <Cell gui={{size: 3}}>
              <h1>Wellcome!</h1>
            </Cell>
            <Cell gui={{size: 3}}>
              <h1>Wellcome!</h1>
            </Cell>
            <Cell gui={{size: 3}}>
              <h1>Wellcome!</h1>
            </Cell>
          </Row>
        </Collapse>
      </Row>
      <Row>
        <Cell gui={{size: 11}}>
          <Calendar
            date={selectedDate}
            onChangeMonthHandler={(date) => setMonth(date)}
            monthToShow={month}
            typeRender={"month"}
            onChangeDate={(date) => setSelectedDate(date)}
            rangeDates={range}
            onChangeRangeData={(date) => {
              if (range.length > 1) {
                setRange([]);
              } else {
                if (range.length === 1) {
                  let newArr = [];
                  if (new Date(range[0]) < new Date(date)) {
                    newArr = [range[0], date];
                  } else {
                    newArr = [date, range[0]];
                  }
                  setRange(newArr);
                  // setRange()
                } else {
                  setRange([date]);
                }
              }
            }}
            rules={{ enableRage: true }}
          />
        </Cell>
      </Row>

      <Paggination></Paggination>
    </Wrapper>
  );
}

export default App;
