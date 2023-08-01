import * as React from 'react'
import { DropdownArrowInterface, DropdownOptions } from './dropdown.types'
import initEffects from './src/initEffects'

const DropdownArrow = (props: DropdownArrowInterface) => {
    if (props?.gui?.arrow) {
        return props?.gui?.arrow
    }
    return <button>{props?.isOpened ? "Close" : "Open"}</button>
}

const Dropdown = (props: DropdownOptions) => {

    const [isOpened, setIsOpened] = React.useState(false)

    initEffects({...props, isOpened ,setIsOpened})

    return (
        <div {...props?.DOMAttributes} className={`system_dropdown_wrapper`}>
            <div onClick={() => setIsOpened(!isOpened)} className={`selected_item`}>{props?.state?.value?.value} <DropdownArrow isOpened={isOpened} setIsOpened={setIsOpened}  /></div>
            <ul className={`items ${isOpened && "active"}`}>
                {props?.gui?.items && props?.gui?.items?.map(item => 
                    <li onClick={() => props?.state?.setValue && props?.state?.setValue(item)}>{item?.value}</li>    
                )}
            </ul>
        </div> 
    )
}

export default Dropdown