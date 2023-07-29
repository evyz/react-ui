import React from "react"
import { TabContainerOptions } from "../tabcontainer.types"

const initEffects = (props: TabContainerOptions) => {
    React.useEffect(() => {
        !props?.state?.active?.id && props?.state?.setActive(props?.gui?.components?.length > 0 && props?.gui?.components[0])
    }, [props])
}

export default initEffects