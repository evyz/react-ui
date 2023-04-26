import React, { useRef, useState } from "react";
import { Cell, Row } from "../markup/markup";
import Button from "../buttons/button";
import './formbuilder.css'
import Input from "../inputs/input";

export function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

const Widgets = ({widget, setWidget}) => {
    const [data, setData] = useState([
        {name: "Row", widget: Row},
        {name: "Cell", widget: Cell},
    ])

    return (
        <ul>
            {data && data.length > 0 && data?.map(item => 
                <li onClick={() => setWidget(item)}>{item?.name}</li>    
            )}
        </ul>
    )
}

const WidgetEditor = () => {

    const [widget, setWidget] = useState(null)
    
    const [styles, setStyles] = useState({})
    const [background, setBackground] = useState("#")


    return (
        <div>
            <h1>WidgetEditor</h1>

            <Row>
                <Cell size={8}>
                    <Row>
                        <Button>пересчитать</Button>
                    </Row>
                    <Row style={{background: "var(--main-text-color)", borderRadius: 15}}>
                        {widget?.widget && <widget.widget style={styles} className="system_widgeteditor">
                            <h1>Пример текста внутри строки</h1>
                            <desc>1234 1234 1234 1234 1234</desc>
                        </widget.widget>}
                    </Row>

                    <Row>
                        <Cell>
                            <Input value={background} setValue={setBackground} />
                            <Button onClick={() => setStyles(prev => {return{...prev, background}})}>Применить</Button>
                        </Cell>
                        
                    </Row>
                </Cell>
                <Cell size={2}><Widgets widget={widget} setWidget={setWidget} /></Cell>
            </Row>
        </div>
    )
}
export default WidgetEditor