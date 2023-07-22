import { useEffect, useState } from "react";
import Wrapper from "./evyz@react-forms-confirmed/wrapper/wrapper";
import Grid from "./evyz@react-forms-confirmed/grid/grid";
import Dropdown from "./evyz@react-forms-confirmed/dropdown/dropdown";
import { Cell } from "./evyz@react-forms-confirmed";
import "./evyz@react-forms-confirmed/index.css";
import Paggination from "./evyz@react-forms-confirmed/paggination/paggination";

const arr = [
  { id: 1, name: "Test", size: "123", isConfirmed: true },
  { id: 2, name: "Tes2232", size: "123", isConfirmed: false },
  { id: 3, name: "Tes2132131t", size: "123", isConfirmed: true },
  { id: 4, name: "Test123", size: "123", isConfirmed: true },
  { id: 5, name: "Test123", size: "123", isConfirmed: true },
  { id: 1, name: "Test", size: "123", isConfirmed: true },
  { id: 2, name: "Tes2232", size: "123", isConfirmed: false },
  { id: 3, name: "Tes2132131t", size: "123", isConfirmed: true },
  { id: 4, name: "Test123", size: "123", isConfirmed: true },
  { id: 5, name: "Test123", size: "123", isConfirmed: true },
  { id: 1, name: "Test", size: "123", isConfirmed: true },
  { id: 2, name: "Tes2232", size: "123", isConfirmed: false },
  { id: 3, name: "Tes2132131t", size: "123", isConfirmed: true },
  { id: 4, name: "Test123", size: "123", isConfirmed: true },
  { id: 5, name: "Test123", size: "123", isConfirmed: true },
  { id: 1, name: "Test", size: "123", isConfirmed: true },
  { id: 2, name: "Tes2232", size: "123", isConfirmed: false },
  { id: 3, name: "Tes2132131t", size: "123", isConfirmed: true },
  { id: 4, name: "Test123", size: "123", isConfirmed: true },
  { id: 5, name: "Test123", size: "123", isConfirmed: true },
];

function App() {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [limit, setLimit] = useState({ value: 10 });

  const fields = [
    { id: 1, value: "123" },
    { id: 2, value: "456" },
    { id: 3, value: "789" },
    { id: 4, value: "0100" },
  ];

  const [field, setField] = useState(fields[0]);

  useEffect(() => {
    setRows(
      arr.slice(
        (page - 1 === 0 ? 1 : page - 1) * limit?.value,
        Number(limit?.value)
      )
    );
    setMaxPage(arr.length / Number(limit?.value));
  }, [limit, page]);

  return (
    <Wrapper>
      <Grid
        state={{ value: rows }}
        gui={{
          fields: [
            { id: 1, key: "id" },
            { id: 2, key: "name", thead: { style: { width: 200 } } },
            { id: 3, key: "size" },
          ],
          page,
          limit,
        }}
      ></Grid>

      <Paggination
        gui={{ limit: { value: limit, setValue: setLimit } }}
        state={{ maxValue: maxPage, value: page, setValue: setPage }}
      ></Paggination>
    </Wrapper>
  );
}

export default App;
