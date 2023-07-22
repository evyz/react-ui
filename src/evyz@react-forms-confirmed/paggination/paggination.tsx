import * as React from 'react'
import { Cell, Row, WidgetBaseOptions } from "..";
import Dropdown from "../../evyz@react-forms-confirmed/dropdown/dropdown";


interface PagginationOptions extends WidgetBaseOptions{
    state: {
        value: Number;
        setValue: Function;        
        maxValue: Number;
    }
    gui: {
        limit: {
            list: [];
            value: Number;
            setValue: Function;
        }
    }
}

const Paggination = (props: PagginationOptions) => {

    const [activeState, setActiveState] = React.useState({})
    const defaultLists = [
        {value: `${1}`},
        {value: `${5}`},
        {value: `${10}`},
        {value: `${25}`},
        {value: `${50}`},
        {value: `${100}`}
    ]

    React.useEffect(() => {
        if(typeof props?.gui?.limit?.value === "number"){
            setActiveState({value: props?.gui?.limit?.value})
        }else{
            setActiveState(props?.gui?.limit?.value)
        }
    }, [props?.gui?.limit?.value])


    return (
        <Row styles={{justifyContent: 'space-between'}}>
           <Cell gui={{size: 3}}>
                <Dropdown gui={{items: props?.gui?.limit?.list ? props?.gui?.limit?.list : defaultLists}} state={{value: activeState, setValue: props?.gui?.limit?.setValue}} />
           </Cell>
           <Cell gui={{size: 3}}>
                <button onClick={() => props?.state?.setValue(Number(props?.state?.value) - 1)}>{`<`}</button>
                <button onClick={() => props?.state?.setValue(Number(props?.state?.value) + 1)}>{`>`}</button>
           </Cell>
        </Row>      
    )
}

export default Paggination