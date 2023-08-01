import React from "react"
import { DropdownOptions } from "../dropdown.types"

interface initEffectsInterface extends DropdownOptions{
    isOpened: Boolean;
    setIsOpened: Function;
}

export default ( props: initEffectsInterface ) => {
    React.useEffect(() => {
        props?.setIsOpened(false)
    }, [props?.state?.value])

    React.useEffect(() => {
        if (props?.gui?.onChangeIsOpened) {
            props?.gui?.onChangeIsOpened({prev: !props?.isOpened, value: props?.isOpened})
        }
        if (props?.gui?.setIsOpened) {
            props?.gui?.setIsOpened(props?.isOpened)
        }
    }, [props?.isOpened])
}