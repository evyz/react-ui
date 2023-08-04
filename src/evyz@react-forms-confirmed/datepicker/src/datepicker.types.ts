import React, { SetStateAction } from "react";
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
    value?: string | "year.month" | "year/month" | "year month" | "year.mm" | "year/mm" | "year mm";
}

interface FormatDateInterface extends FormatInterface{ 
    value?: "year.month.day" | "year/month/day" | "year month day" | "year.mm.day" | "year/mm/day" | "year mm day";
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
                format?: FormatMonthInterface;
                bar?: {
                    custom?: React.ReactNode;
                    year?: {
                        isCanEdit?: true | false;
                        max?: Date | string;
                        min?: Date | string;
                    };
                    month?: {
                        isCanEdit?: Boolean | false;
                    };
                }
            };
            date?: DateInterface;
            today?: DateInterface;
            activeDate?: DateInterface;
            disabledDate?: DateInterface;
            selectedDate?: DateInterface;
        }
        daysOfWeek?: string[];
        format?: FormatDateInterface
    }
}

export interface DateBarInterface {
    dateRender: Date;
    format?: FormatMonthInterface
    onClick?: Function;
}