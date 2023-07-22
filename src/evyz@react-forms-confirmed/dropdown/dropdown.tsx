import * as React from 'react'
import { WidgetBaseOptions } from "..";
import './dropdown.css'

interface DropdownItem {
    id?: Number
    value?: string
    component?: React.ReactNode
}

interface DropdownItems extends Array<DropdownItem>{}


interface DropdownOptions extends WidgetBaseOptions{
    state?: {
        value?: DropdownItem
        setValue?: Function;
    }
    gui?: {
        items?: DropdownItems
    }
}

const Dropdown = (props: DropdownOptions) => {

    const [isOpened, setIsOpened] = React.useState(false)

    React.useEffect(() => {
        setIsOpened(false)
    }, [props?.state?.value])

    return (
        <div className={`system_dropdown_wrapper`}>
            <div  onClick={() => setIsOpened(!isOpened)} className={`selected_item`}>{props?.state?.value?.value} <button>{isOpened ? "Close" : "Open"}</button></div>
            <ul className={`items ${isOpened && "active"}`}>
                {props?.gui?.items && props?.gui?.items?.map(item => 
                    <li onClick={() => props?.state?.setValue && props?.state?.setValue(item)}>{item?.value}</li>    
                )}
            </ul>
        </div> 
    )
}

export default Dropdown