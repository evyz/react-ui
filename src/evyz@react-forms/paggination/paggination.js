import { useEffect, useState } from "react"
import { Cell, Row } from "../markup/markup"
import { Checkbox } from "../checkbox/checkbox.tsx"
import Button from "../buttons/button.tsx"

const Paggination = ({rules }) => {

    const [count, setCount] = useState(10)
    const [limit, setLimit] = useState(20)
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)
    const [pageButtons, setPageButtons] = useState([])

    const [limits, setLimits] = useState([
        1,
        5,
        10,
        15,
        20
    ])

    useEffect(() => {
        if (count < limit) {
            return setMaxPage(1) // need to refactor
        }

        if (count % limit !== 0) {
            setMaxPage(count / limit + 1)            
        } else {
            setMaxPage(count / limit)            
        }
    }, [count, limit, page, limits])

    return (
        <Row style={{justifyContent: 'space-between'}}>
            <Cell size={3}>
                {limits && limits.length && limits.map(item =>     
                    <Checkbox value={limit === item} label={String(item)} onClick={() => setLimit(item)} />
                )}
            </Cell>
            <Cell size={4}>
                {rules?.enablePages ?
                    <Row></Row>
                   :  <Row>
                        <Button onClick={() => setPage(page - 1)} customValidationToDisable={page-1 > 0 ? true : false}>{"<"}</Button>
                        <Button onClick={() => setPage(page + 1)} customValidationToDisable={page < maxPage ? true : false}>{">"}</Button>
                    </Row> }
            </Cell>
        </Row>
    )
}

export default Paggination