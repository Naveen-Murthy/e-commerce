import React from "react";
import "./common.scss";

interface Props {
  handleClick: any;
  status: boolean;
}

function Login({ handleClick, status }: Props) {
  return (
    <React.Fragment>
      {/* Login Form Starts */}
      <div className={`login form_block ${!status ? "switched" : ""}`}>
        <form className="login-form">
          <div className="form-group">
            <label>Email Adderss</label>
            <input type="email" name="loginemail" id="loginemail" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="loginPassword" id="loginPassword" />
          </div>
          <div className="CTA">
            <button type="submit" className="submit_button">
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
