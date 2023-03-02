import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./LoginorSignup.scss";

function LoginorSignup() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const toogle = (event: boolean) => {
    setIsLogin(event);
  };

  return (
    <React.Fragment>
      <div className="form_container">
        <div className="welcome_block">
          <div className="welcome_message">
            <h1>Welcome</h1>
            <p>Your Right Choice</p>
          </div>
        </div>
        <div className="form_blocks">
          <Login handleClick={toogle} status={isLogin} />
          <Signup handleClick={toogle} status={isLogin} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginorSignup;
