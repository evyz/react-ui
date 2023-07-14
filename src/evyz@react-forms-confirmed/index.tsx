import Cell from "./cell/cell";
import Button from "./button/button";
import Row from "./row/row";
import Popup from "./popup/popup";
import Wrapper from "./wrapper/wrapper";
import Selectize from "./selectize/selectize";
import Input from "./input/input";

export interface WidgetBaseOptions {
  className?: string;
  children: React.ReactChild;
  styles: React.CSSProperties;
}

export { Cell, Button, Row, Popup, Wrapper, Selectize, Input };
