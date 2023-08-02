import React from "react"

export default () => {
    const [dateRender, setDateRender] = React.useState(new Date())
    const [matrix, setMatrix]= React.useState<(Date | null)[][]>([])

    return {dateRender, setDateRender, matrix, setMatrix}
}