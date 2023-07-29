import { TabContainerComponent, TabContainerOptions } from "../tabcontainer.types"

export default (props: TabContainerOptions) => {
    return {
        onClickToOpenComponent: (event:any, state: TabContainerComponent) => {
            props?.events?.onClickToOpenComponent && props?.events?.onClickToOpenComponent(event)
            props?.state?.setActive(state)
        }
    }
}