import { useEffect, useState } from "react";
import Wrapper from "./evyz@react-forms/wrapper/wrapper";
import Grid from "./evyz@react-forms-confirmed/grid/grid";

function App() {

  const [rows, setRows] = useState([])
  const [page, setPage] = useState(0)
  const [limit ,setLimit] = useState(2)

  useEffect(() => {
    setRows([
      {id: 1, name: "Test", size: "123", isConfirmed: true},
      {id: 2, name: "Tes2232", size: "123", isConfirmed: false},
      {id: 3, name: "Tes2132131t", size: "123", isConfirmed: true},
      {id: 4, name: "Test123", size: "123", isConfirmed: true},
      {id: 5, name: "Test123", size: "123", isConfirmed: true},
    ])
  }, [])


  return (
    <Wrapper>
      <Grid state={{value: rows}} gui={{fields: [
    { id: 1, key: "id" },
    { id: 2, key: "name", thead: {style: {width: 200}} },
    { id: 3, key: "size" },
  ], page, limit}}></Grid>
    </Wrapper>
  );
}

export default App;
