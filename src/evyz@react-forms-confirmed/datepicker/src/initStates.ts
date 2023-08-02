import React from "react"

export default () => {
    const [dateRender, setDateRender] = React.useState(new Date())
    const [matrix, setMatrix] = React.useState<(Date | null)[][]>([])
    const [isOpenedFullEditor, setIsOpenedFullEditor] = React.useState<Boolean>(false)

    return {dateRender, setDateRender, matrix, setMatrix, isOpenedFullEditor, setIsOpenedFullEditor}
}