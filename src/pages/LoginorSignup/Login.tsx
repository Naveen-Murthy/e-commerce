import React, { useState } from "react";
import "./common.scss";
import { useNavigate } from "react-router-dom";

interface Props {
  handleClick: any;
  status: boolean;
}

function Login({ handleClick, status }: Props) {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [validators, setValidators] = useState({
    emailValidator: "",
    passwordValidator: "",
  });

  const [activeFields, setActiveFields] = useState({
    emailActive: false,
    passwordActive: false,
  });

  const handleSubmit = (event: any) => {
    if (event) {
      // To prevent default behaviour(reload page) of browser
      event.preventDefault();
    }
    if (validate()) {
      console.log({ ...inputs });
      history("/");
    }
  };

  const handleInputChange = (event: any) => {
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
    if (event.target.value === "") {
      handleInputFocus(event);
    } else {
      handleInputBlur(event);
    }
  };

  const handleInputFocus = (event: any) => {
    if (event.target.value === "") {
      setActiveFields((activeFields) => ({
        ...activeFields,
        [event.target.name + "Active"]: true,
      }));
    }
  };

  const handleInputBlur = (event: any) => {
    if (event.target.value === "") {
      setActiveFields((activeFields) => ({
        ...activeFields,
        [event.target.name + "Active"]: false,
      }));
    }
  };

  const validate = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputs.email === "") {
      setValidators((validators) => ({
        ...validators,
        emailValidator: "Please enter your email ID",
      }));
      return false;
    } else if (reg.test(inputs.email) === false) {
      setValidators((validators) => ({
        ...validators,
        emailValidator: "Please enter valid email ID",
      }));
      return false;
    } else {
      setValidators((validators) => ({
        ...validators,
        emailValidator: "",
      }));
    }

    if (inputs.password === "") {
      setValidators((validators) => ({
        ...validators,
        passwordValidator: "Please enter password",
      }));
      return false;
    } else {
      setValidators((validators) => ({
        ...validators,
        passwordValidator: "",
      }));
    }

    return true;
  };

  return (
    <React.Fragment>
      {/* Login Form Starts */}
      <div className={`login form_block ${!status ? "switched" : ""}`}>
        <form className="login-form">
          <div
            className={`form-group ${
              validators.emailValidator === "" ? "" : "hasError"
            }`}
          >
            <label className={`${activeFields.emailActive ? "active" : ""}`}>
              Email Adderss
            </label>
            <input
              type="email"
              name="email"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              value={inputs.email}
            />
            <span className="error">{validators.emailValidator}</span>
          </div>
          <div
            className={`form-group ${
              validators.passwordValidator === "" ? "" : "hasError"
            }`}
          >
            <label className={`${activeFields.passwordActive ? "active" : ""}`}>
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              value={inputs.password}
            />
            <span className="error">{validators.passwordValidator}</span>
          </div>
          <div className="submit_block">
            <button onClick={handleSubmit} className="submit_button">
              Login
            </button>
            <p className="switch" onClick={() => handleClick(false)}>
              I'm New
            </p>
          </div>
        </form>
      </div>
      {/* Login Form Ends */}
    </React.Fragment>
  );
}

export default Login;
