import * as React from "react";
import { WidgetBaseOptions } from "..";
import Row from "../row/row.tsx";
import Cell from "../cell/cell.tsx";
import "./popup.css";

interface PopupOptions extends WidgetBaseOptions {
  onCloseWindow: Function;
  state: {
    active: boolean;
    setActive: Function;
  };
  gui: {
    cellSize: Number;
  };
}

const Popup = (props: PopupOptions) => {
  if (props?.state?.active)
    return (
      <Row
        className={"system_popup"}
        events={{
          onClick: (e) =>
            props?.state?.setActive
              ? props?.state?.setActive(false)
              : props?.onCloseWindow && props?.onCloseWindow(e),
        }}>
        <Cell
          gui={{ size: props?.gui?.cellSize ? props?.gui?.cellSize : 8 }}
          events={{
            onClick: (e) => {
              if (!e) {
                e = window.event;
              }
              e.stopPropagation();
            },
          }}>
          {props?.children}
        </Cell>
      </Row>
    );
};

export default Popup;
