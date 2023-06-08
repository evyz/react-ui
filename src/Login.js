import React, { useState } from "react";
import Wrapper from "./evyz@react-forms/wrapper/wrapper";
import { Cell, Row } from "./evyz@react-forms/markup/markup";
import "./Login.css";
import Button from "./evyz@react-forms/buttons/button.tsx";
import Input from "./evyz@react-forms/inputs/input.tsx";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [errorName, setErrorName] = useState({ status: false, message: "ok" });
  const [errorPassword, setErrorPassword] = useState({
    status: false,
    message: "ok",
  });

  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const signInMethod = () => {
    setIsButtonLoading(true);
    setTimeout(() => {
      setIsButtonLoading(false);
    }, 1500);
  };

  return (
    <Wrapper customMode={"system_mode-blue"}>
      <Row style={{ height: "100vh", alignItems: "center" }}>
        <Cell size={11}>
          <h1>Sign in</h1>
          <label>
            Don't you have an account? <span>Sign up</span>
          </label>
          <Input
            rules={{ notNull: true }}
            error={errorName}
            setError={setErrorName}
            value={name}
            setValue={setName}
            label={"Name"}
          />
          <Input
            rules={{ notNull: true }}
            error={errorPassword}
            setError={setErrorPassword}
            value={password}
            setValue={setPassword}
            label={"Password"}
          />
          <Button
            deps={[name, password]}
            rulesToDeps={{ notNull: true }}
            onClick={signInMethod}
            isLoading={isButtonLoading}
            setIsLoading={setIsButtonLoading}
          >
            Sign in
          </Button>
        </Cell>
      </Row>
    </Wrapper>
  );
};

export default Login;
