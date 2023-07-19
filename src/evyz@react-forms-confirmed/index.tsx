import Cell from "./cell/cell";
import Button from "./button/button";
import Row from "./row/row";
import Popup from "./popup/popup";
import Wrapper from "./wrapper/wrapper";
import Selectize from "./selectize/selectize";
import Input from "./input/input";
import { Checkbox, SwitchBox } from "./checkbox/checkbox";
import TabContainer from "./tabcontainer/tabcontainer";
import Alert from "./alert/alert";
import StackAlerts from "./stackalerts/stackalerts";

export interface WidgetBaseOptions {
  className?: string;
  children?: React.ReactNode;
  styles?: React.CSSProperties;
}

export {
  Cell,
  Button,
  Row,
  Popup,
  Wrapper,
  Selectize,
  Input,
  Checkbox,
  SwitchBox,
  TabContainer,
  Alert,
  StackAlerts,
};
