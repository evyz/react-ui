# React UI library

## Example

```
import "@lzstudio/react-widgets/src/styles/widgets.css"; // --- default styles
import "@lzstudio/react-widgets/src/styles/index.css"; // --- default vars styles
import { Button, Cell, Row, Wrapper } from "@lzstudio/react-widgets";

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
- FieldSet

Forms:

- Button
- Selectize
- Checkbox
- Switchbox
- Dropdown



## Usage patterns examples

### Markup pattern:
![image](https://github.com/evyz/react-ui/assets/73714921/f5b5d23b-ab26-446a-b387-b6829d95d435)

### Pattern with nesting markup 
![image](https://github.com/evyz/react-ui/assets/73714921/71b52f05-3ba7-42c5-9f04-12b0c4f20dbe)
