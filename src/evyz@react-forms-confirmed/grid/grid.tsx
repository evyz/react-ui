import * as React from "react";
import { WidgetBaseOptions } from "..";
import { usePaginationGrid } from "./pagination";

interface FieldOptions {
  id?: Number;
  key?: string;
  value?: any;
  thead?: {
    className?: string;
    style?: React.CSSProperties;
  };
  tbody?: {
    className?: string;
    style?: React.CSSProperties;
  };
  events?: {
    onClick?: Function;
  };
}

export interface FieldsOptions extends Array<FieldOptions> {}

export interface GridGui {
  gui: {
    fields: FieldsOptions;
    thead?: {
      className?: string;
      style?: React.CSSProperties;
    };
    tbody?: {
      className?: string;
      style?: React.CSSProperties;
    };
  };
}

export interface GridOptions extends WidgetBaseOptions, GridGui {
  events?: {
    row?: {
      onClick?: Function;
    };
  };

  state?: {
    value?: [];
  };
}

const Thead = (props: GridOptions) => {
  return (
    <thead>
      {props?.gui?.fields &&
        props?.gui?.fields?.length &&
        props?.gui?.fields.map((field) => (
          <th
            style={field?.thead?.style}
            className={`${field?.thead?.className}`}
            key={`${field?.id ? field?.id : field?.key}`}>
            {field?.key}
          </th>
        ))}
    </thead>
  );
};

const Grid = (props: GridOptions) => {
  const {
    data,
    events: { onClickRow, onClickCell },
  } = usePaginationGrid(props);
  return (
    <div>
      <table>
        <Thead gui={{ fields: props?.gui?.fields }} />
        <tbody>
      {data &&
        data?.length &&
        data.map((row) => (
          <tr onClick={onClickRow}>
            {props?.gui?.fields &&
              props?.gui?.fields?.length &&
              props?.gui?.fields.map((field) => (
                <th
                  onClick={(e) =>
                    onClickCell(e, {
                      id: field?.id,
                      key: field?.key,
                      value: row[field?.key ? field?.key : ""],
                    })
                  }>
                  {row[field?.key ? field?.key : ""]}
                </th>
              ))}
          </tr>
        ))}
    </tbody>
      </table>
    </div>
  );
};

export default Grid;
