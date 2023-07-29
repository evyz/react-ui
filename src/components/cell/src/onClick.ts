import { CellOptions } from "../cell.types";

export default (props: CellOptions) => {
    return {
        onClick: (event: any) => {
            props?.events?.onClick && props?.events?.onClick(event);
        }
    }
}