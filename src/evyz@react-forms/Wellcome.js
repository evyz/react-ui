import { useEffect, useState } from "react"
import { Cell, Row } from "./markup/markup"
import Wrapper from "./wrapper/wrapper"
import Input from "./inputs/input"
import { Checkbox, SwitchBox } from "./checkbox/checkbox"
import Fieldset from "./fieldset/fieldset"
import Button from "./buttons/button"
import Dropdown from "./dropdown/dropdown"
import Collapse from "./collapse/collapse"
import Calendar from "./calendar/calendar"


const CheckboxSlide = () => {

    const [value, setValue] = useState(true)
    const [label, setLabel] = useState("")
    const [labelOptions, setLabelOptions] = useState({
        isCantSelect: false
    })
    const [labelStyles, setLabelStyles] = useState("")

    return (
        <Row>
            <Cell size={11}>
                <h1>Widget <span style={{ color: `var(--main-accent-text-color)`, textDecoration: 'underline' }}>Checkbox</span></h1>
                <desc>Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание модели развития. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации систем массового участия. </desc>
                <hr />
                <Row>
                    <Cell size={5}>
                        <Fieldset cellStyles={{minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center'}}  label={"Result"}>
                            <Checkbox styles={{width: 'max-content'}} labelStyles={labelStyles} setValue={setValue} value={value} labelOptions={labelOptions} label={label}>Write label</Checkbox>
                        </Fieldset>
                    </Cell>
                    <Cell size={5}>
                        <Input label={"Choose label"} value={label} setValue={setLabel} />
                        {Object.keys(labelOptions).map(key =>
                            typeof labelOptions[key] === 'boolean' ? <Checkbox value={labelOptions[key]} onClick={() => {
                                let newObj = new Object()
                                newObj[key] = !labelOptions[key]
                                setLabelOptions(prev => {return {...prev,  ...newObj}})
                            }}>{key}</Checkbox>     : <></>
                        )}
                    </Cell>
                </Row>
            </Cell>
        </Row>
       
    )
}

const InputSlide = () => {

    const [value, setValue] = useState("")
    const [label, setLabel] = useState("")
    const [rules, setRules] = useState({
        notNull: false
    })
    const [error, setError] = useState({ stasus: false, message: "its ok" })
    const [types, setTypes] = useState([
        "default", "calendarpicker"
    ])
    const [type, setType] = useState(types[0])

    useEffect(() => {
        setValue("")
    }, [type])

    return (
            <Row>
                <Cell size={11}>
                    <h1>Widget <span style={{ color: `var(--main-accent-text-color)`,  }}>Input <i style={{textDecoration: 'underline', cursor: 'help'}}>#</i></span></h1>
                    <desc>Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание модели развития. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации систем массового участия. </desc>
                    <hr />
                    <Row>
                        <Cell size={5}>
                            <Fieldset cellStyles={{ minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }} label={"Result"}>
                                <Input error={error} setError={setError} rules={rules} label={label} value={value} setValue={setValue} type={type} />
                            </Fieldset>
                        </Cell>
                        <Cell size={5}>
                            <Input label={"Choose label"} value={label} setValue={setLabel} />
                            <hr />
                            <h3>Rules:</h3>
                            {Object.keys(rules).map(key =>
                                typeof rules[key] === 'boolean' ? <Checkbox value={rules[key]} onClick={() => {
                                    let newObj = new Object()
                                    newObj[key] = !rules[key]
                                    setRules(prev => {return {...prev,  ...newObj}})
                                }}>{key}</Checkbox> : <></>
                            )}
                            <hr />
                            <h3>Type of widget:</h3>
                            <Row>
                                {types && types.length > 0 && types.map(value => 
                                    <Button onClick={() => setType(value)} customValidationToDisable={type !== value}>{value}</Button>
                                )}
                            </Row>
                        </Cell>
                    </Row>
                </Cell>
            </Row>
    )
}

const CollapseSlide = () => {

    const [label, setLabel] = useState("Open this widget!")

    return (
            <Row>
                <Cell size={11}>
                    <h1>Widget <span style={{ color: `var(--main-accent-text-color)`,  }}>Collapse <i style={{textDecoration: 'underline', cursor: 'help'}}>#</i></span></h1>
                    <desc>Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание модели развития. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации систем массового участия. </desc>
                    <hr />
                    <Row>
                        <Cell size={5}>
                        <Fieldset cellStyles={{ minHeight: 400, display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'flex-start' }} label={"Result"}>
                            <Collapse label={label}>
                                <Cell size={4}>
                                    <h3>Hello! And welcome to los pollos hermanos family</h3>
                                    <desc>My name is Gustavo but you can call me Gus</desc>
                                </Cell>
                            </Collapse>
                             <Collapse label={label}>
                                <Cell size={4}>
                                    <h3>Hello! And welcome to los pollos hermanos family</h3>
                                    <desc>My name is Gustavo but you can call me Gus</desc>
                                </Cell>
                            </Collapse>
                            </Fieldset>
                        </Cell>
                        <Cell size={5}>
                            <Input label={"Choose label"} value={label} setValue={setLabel} />
                           
                        </Cell>
                    </Row>
                </Cell>
            </Row>
    )
}

const ButtonSlide = () => {
    const [label, setLabel] = useState("Open this widget!")
    const [colors, setColors] = useState(['red', 'blue', 'yellow', 'green', 'black', 'grey', 'white'])
    const [color,setColor] = useState(0)

    return (
            <Row>
                <Cell size={11}>
                    <h1>Widget <span style={{ color: `var(--main-accent-text-color)`,  }}>Collapse <i style={{textDecoration: 'underline', cursor: 'help'}}>#</i></span></h1>
                    <desc>Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание модели развития. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации систем массового участия. </desc>
                    <hr />
                    <Row>
                        <Cell size={5}>
                        <Fieldset cellStyles={{ minHeight: 200, display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'center' }} label={"Result"}>
                            <Button styles={{background: colors[color]}} onClick={() => {
                                if (colors[color + 1]) {
                                    setColor(color + 1)
                                } else {
                                    setColor(0)
                                }
                             }}>{label}</Button>
                        </Fieldset>
                        </Cell>
                        <Cell size={5}>
                            <Input label={"Choose label"} value={label} setValue={setLabel} />
                        </Cell>
                    </Row>
                </Cell>
            </Row>
    )
}

const CalendarSlide = () => {

    const [monthToShow, setMonthToShow] = useState(new Date())
    const [date, setDate] = useState(new Date())
    const [dates, setDates] = useState([])


    const [rangeOptions, setRangeOptions] = useState({
        enableRange: false
    })

    return (
        <Row>
            <Cell size={11}>
                <h1>Widget <span style={{ color: `var(--main-accent-text-color)`,  }}>Calendar <i style={{textDecoration: 'underline', cursor: 'help'}}>#</i></span></h1>
                <desc>Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание модели развития. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации систем массового участия. </desc>
                <hr />
                <Row>
                    <Cell size={5}>
                    <Fieldset cellStyles={{ minHeight: 200, display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'center' }} label={"Result"}>
                            <Calendar rangeDates={dates} onChangeRangeData={(date) => {
                                 if (dates.length > 1) {
                                setDates([])
                            } else {
                                if (dates.length === 1) {
                                let newArr = []
                                if (new Date(dates[0]) < new Date(date)) {
                                    newArr = [dates[0], date]
                                } else {
                                    newArr= [ date, dates[0]]
                                }
                                setDates(newArr)
                                } else {
                                setDates([date])
                                }
                            }
                        }} rules={{enableRage: rangeOptions?.enableRange}} date={date} onChangeDate={date => setDate(date)} typeRender={"month"} monthToShow={monthToShow} onChangeMonthHandler={(date) => setMonthToShow(date)} />
                    </Fieldset>
                    </Cell>
                    <Cell size={5}>
                        <Input value={date} />
                        <Fieldset wrapperStyles={{marginTop: 30}} label={"Range rules"}>
                         {Object.keys(rangeOptions).map(key =>
                            typeof rangeOptions[key] === 'boolean' ? <SwitchBox labelOptions={{isCantSelect: true}} value={rangeOptions[key]} onClick={() => {
                                let newObj = new Object()
                                newObj[key] = !rangeOptions[key]
                                setRangeOptions(prev => {return {...prev,  ...newObj}})
                            }}>{key}</SwitchBox>     : <></>
                            )}
                            </Fieldset>
                    </Cell>
                </Row>
            </Cell>
        </Row>
    )
}

const Wellcome = () => {

    const [components, setComponents] = useState([
        <CheckboxSlide></CheckboxSlide>,
        <InputSlide></InputSlide>,
        <CollapseSlide />,
        <ButtonSlide />,
        <CalendarSlide />
    ])

    const [activeComponent, setActiveComponent] = useState(0)

    return (
        <Wrapper>
            <Row>
                <Cell>
                    <h1>Widgets {"(" + Number(activeComponent + 1) + ") / (" + components.length + ")"}</h1>
                    <Row>
                        <Button customValidationToDisable={activeComponent !== 0} onClick={() => setActiveComponent(activeComponent -1)}>Prev</Button>
                        <Button customValidationToDisable={activeComponent < components.length - 1} onClick={() => setActiveComponent(activeComponent + 1)}>Next</Button>
                    </Row>

                </Cell>
              
            </Row>

            <Row>
                {components[activeComponent]}
            </Row>
        </Wrapper>
    
    )
}

export default Wellcome