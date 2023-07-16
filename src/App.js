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
import { useState } from "react";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [activeSlide, setActiveSlide] = useState({});

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
    </Wrapper>
  );
}

export default App;
