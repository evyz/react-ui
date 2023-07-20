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

interface FieldsOptions extends Array<FieldOptions> {}

interface gui {
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

export interface GridOptions extends WidgetBaseOptions {
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

interface TBodyProps {
  gui: {};
  data: [];
  onClickRow;
  onClickCell;
}

const Tbody = ({}) => {
  return (
    <tbody>
      {data &&
        data?.length &&
        data.map((row) => (
          <tr onClick={onClickRow}>
            {gui?.fields &&
              gui?.fields?.length &&
              gui?.fields.map((field) => (
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
      </table>
    </div>
  );
};

export default Grid;
