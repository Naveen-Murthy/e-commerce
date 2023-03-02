import React from "react";
import "./common.scss";

interface Props {
  handleClick: any;
  status: boolean;
}

function Signup({ handleClick, status }: Props) {
  return (
    <React.Fragment>
      {/* Signup Form  Starts */}
      <div className={`signup form_block ${status ? "switched" : ""}`}>
        <form className="signup-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="username" id="name" className="name" />
            <span className="error"></span>
          </div>

          <div className="form-group">
            <label>Email Adderss</label>
            <input
              type="email"
              name="emailAdress"
              id="email"
              className="email"
            />
            <span className="error"></span>
          </div>

          <div className="form-group">
            <label>
              Phone Number - <small>Optional</small>
            </label>
            <input type="text" name="phone" id="phone" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="pass"
            />
            <span className="error"></span>
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="passwordCon"
              id="passwordCon"
              className="passConfirm"
            />
            <span className="error"></span>
          </div>

          <div className="CTA">
            <button className="submit_button" type="submit">
              Signup Now
            </button>
            <p className="switch" onClick={() => handleClick(true)}>
              I have an account
            </p>
          </div>
        </form>
      </div>
      {/* Signup Form  Ends */}
    </React.Fragment>
  );
}

export default Signup;
