import Wrapper from "./evyz@react-forms/wrapper/wrapper";
import { useState } from "react";
import "./evyz@react-forms/index.css";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return <Wrapper useCoreConsole={true} isDarkMode={isDarkMode}></Wrapper>;
}

export default App;
