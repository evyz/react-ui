import { useEffect, useState } from "react";
import {Alert, StackAlerts} from "./evyz@react-forms-confirmed/index";
import Wrapper from "./evyz@react-forms/wrapper/wrapper";

function App() {

  const [notif, setNotifs] = useState([])

  useEffect(() => {
    setNotifs([
      {id: 1, title: "123", message: "123"},
      {id: 1, title: "123", message: "123"},
    ])

    setTimeout(() => {
      setNotifs([
        {id: 1, title: "123", message: "123"},
        {id: 1, title: "123", message: "123"},
        {id: 1, title: "111111111111", message: "123"},
        {id: 1, title: "111111111111", message: "123"},
      ])
    }, 2000)
  }, [])

  console.log('notif =>',notif)

  return (
    <Wrapper>
      <StackAlerts state={{value: notif}} gui={{placement: {x: 'left', y: 'top'}}}></StackAlerts>
    </Wrapper>
  );
}

export default App;
