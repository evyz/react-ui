import * as React from 'react'
import { DropdownArrowInterface, DropdownOptions } from './dropdown.types'
import initEffects from './src/initEffects'

const DropdownArrow = (props: any) => {
    return props?.gui?.arrow ? props?.gui?.arrow : <button>{props?.isOpened ? "Close" : "Open"}</button>
}

const Dropdown = (props: DropdownOptions) => {

    const [isOpened, setIsOpened] = React.useState(false)

    initEffects({...props, isOpened ,setIsOpened})

    return (
        <div {...props?.DOMAttributes} className={`${props?.enableClassNameBase ? "system_dropdown_wrapper" : ""}`}>
            <div onClick={() => setIsOpened(!isOpened)} className={`selected_item`}>{props?.state?.value?.value} <DropdownArrow gui={props?.gui} isOpened={isOpened} setIsOpened={setIsOpened}  /></div>
            <ul className={`items ${isOpened && "active"}`}>
                {props?.gui?.items && props?.gui?.items?.state?.map(item => 
                    <li className={`${props?.gui?.items?.className ? props?.gui?.items?.className : ''} ${props?.state?.value?.id === item?.id ? 'active' : ''}`} style={props?.gui?.items?.styles} onClick={() => props?.state?.setValue && props?.state?.setValue(item)}>{item?.value}</li>    
                )}
            </ul>
        </div> 
    )
}

export default Dropdown