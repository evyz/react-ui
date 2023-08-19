import React from "react"
import { TabContainerOptions } from "../tabcontainer.types"

const initEffects = (props: TabContainerOptions) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
        !props?.state?.active?.id && props?.state?.setActive(props?.gui?.components?.length > 0 && props?.gui?.components[0])
    }, [props])
}

export default initEffects