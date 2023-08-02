import { SetStateAction } from "react";
import { WidgetBaseOptions } from "../..";

interface DateInterface {
    className?: string;
    styles?: React.CSSProperties;
}

interface CustomFormat{
    (data: string | Date): string
}

interface FormatInterface{
    custom: CustomFormat;
}


interface FormatMonthInterface extends FormatInterface{ 
    value?: "year.month" | "year/month";
}

interface FormatDateInterface extends FormatInterface{ 
    value?: "year.month.day" | "year/month/day";

}

export interface DatepickerOptions extends WidgetBaseOptions{
    state?: {
        value?: string | Date;
        setValue?: SetStateAction<Function>;
    }
    gui?: {
        dates: {
            renderDate?: {
                value?: string | Date;
                format?: FormatMonthInterface 
            };
            date?: DateInterface;
            today?: DateInterface;
            activeDate?: DateInterface;
            disabledDate?: DateInterface;
            selectedDate?: DateInterface;
        }
        format?: FormatDateInterface
    }
}

export interface DateBarInterface {
    dateRender: Date;
    format?: FormatMonthInterface
}