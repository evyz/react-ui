import { useEffect, useState } from "react"
import { Cell, Row } from "../markup/markup"
import { Checkbox } from "../checkbox/checkbox"
import Button from "../buttons/button"

const Paggination = () => {

    const [count, setCount] = useState(101)
    const [limit, setLimit] = useState(20)
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)

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
            <Cell size={3}>
                {/* {maxPage > 5 ? 
                    []
                } */}
                <Button>{page}</Button>
            </Cell>
        </Row>
    )
}

export default Paggination