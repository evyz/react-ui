import * as React from 'react'
import { DropdownOptions } from './dropdown.types'
import initEffects from './src/initEffects'

const Dropdown = (props: DropdownOptions) => {

    const [isOpened, setIsOpened] = React.useState(false)

    initEffects({...props, setIsOpened})

    return (
        <div className={`system_dropdown_wrapper`}>
            <div onClick={() => setIsOpened(!isOpened)} className={`selected_item`}>{props?.state?.value?.value} <button>{isOpened ? "Close" : "Open"}</button></div>
            <ul className={`items ${isOpened && "active"}`}>
                {props?.gui?.items && props?.gui?.items?.map(item => 
                    <li onClick={() => props?.state?.setValue && props?.state?.setValue(item)}>{item?.value}</li>    
                )}
            </ul>
        </div> 
    )
}

export default Dropdown