# React UI library

## Example

```
import "@evyz/react-widgets/src/styles/widgets.css"; // --- default styles
import "@evyz/react-widgets/src/styles/index.css"; // --- default vars styles
import { Button, Cell, Row, Wrapper } from "@evyz/react-widgets";

function App() {
  return (
    <Wrapper>
      <Row>
        <Cell
          styles={{ position: "relative" }}
          className='some_classname'
          gui={{ size: 12 }}
        >
          <h1>React UI library</h1>
          <Button events={{ onClick: () => alert("wellcome!") }}></Button>
        </Cell>
      </Row>
    </Wrapper>
  );
}

export default App;

```

## List of widgets:

Markup:

- Wrapper
- Cell
- Row

Forms:

- Button
- Selectize
- Checkbox
- Switchbox
