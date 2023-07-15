import * as React from "react";
import { WidgetBaseOptions } from "..";
import Row from "../row/row";
import Cell from "../cell/cell";
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
          onClick: (e: any) =>
            props?.state?.setActive
              ? props?.state?.setActive(false)
              : props?.onCloseWindow && props?.onCloseWindow(e),
        }}>
        <Cell
          gui={{ size: props?.gui?.cellSize ? props?.gui?.cellSize : 8 }}
          events={{
            onClick: (e: Event | undefined) => {
              if (!e) {
                e = window.event;
              }
              e?.stopPropagation();
            },
          }}>
          {props?.children}
        </Cell>
      </Row>
    );
};

export default Popup;
