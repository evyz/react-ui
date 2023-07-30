import React from "react"
import { DropdownOptions } from "../dropdown.types"

interface initEffectsInterface extends DropdownOptions{
    setIsOpened: Function;
}

export default ( props: initEffectsInterface ) => {
    React.useEffect(() => {
        props?.setIsOpened(false)
    }, [props?.state?.value])
}