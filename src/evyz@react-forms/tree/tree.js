import { useState } from "react"
import Button from "../buttons/button.tsx"
import './tree.css'
import { Row } from "../markup/markup.js"

const Item = ({ obj,options }) => {

    const [isOpened, setIsOpened] = useState(false)

    return (
        <div className="tree_item" {...{"has-childs": (obj?.childs && obj?.childs?.length > 0) ? "true" : false}} >
            <Row>
                <span>{obj?.name}</span>
                {obj?.childs && obj?.childs?.length > 0 && <Button className={'tree_btn'} onClick={() => setIsOpened(!isOpened)}>{isOpened ? "-" : "+"}</Button>}
            </Row>
            {isOpened && obj?.childs && obj?.childs.length > 0 && obj?.childs.map(item => 
                options?.componentToRender ? <options.componentToRender obj={item}></options.componentToRender> : <Item obj={item} options={options}></Item>
            )}
        </div>
    )
} 

const Tree = ({ data, options }) => {
    return (
        <div className="system_tree">
            {data && data.map(item => 
                options?.componentToRender ? <options.componentToRender obj={item}></options.componentToRender> : <Item obj={item} options={options}></Item>
            )}
        </div>
    )
}

export default Tree;