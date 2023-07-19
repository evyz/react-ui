import { WidgetBaseOptions } from "..";



interface GridOptions extends WidgetBaseOptions{
    events: {
        row: {
            onClick: Function;
        }
        cell:{
            onClick: Function;
        }
    }
    gui:{
        fields: [];
        size: Number;
    }
}