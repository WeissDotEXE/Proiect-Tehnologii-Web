import React, { useEffect, useState } from "react";
import "./loginform.css";

const LoginForm = () => {
  const [popupStyle, showPopup] = useState("hide");

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  return (
    <div>
      <div className="cover">
        <h1 className="align-center text-color margin-top-2">Login</h1>
        <input
          className="align-center margin-top-2"
          type="text"
          placeholder="username"
        />
        <input
          className="align-center margin-top-2"
          type="password"
          placeholder="password"
        />

        <div className=" login-btn align-center" onClick={popup}>
          Login
        </div>
        <div className="text-color flex remember-me">
          <label htmlFor="subscribeNews ">Remember me</label>
          <input
            className="position"
            type="checkbox"
            id="subscribeNews"
            name="subscribe"
            value="newsletter"
          />
        </div>

        <p className="text align-center text-color margin-top-2">
          Or login using
        </p>

        <div className="alt-login margin-auto margin-top-2">
          <div className="facebook"></div>
          <div className="google"></div>
        </div>

        <div className={popupStyle}>
          <h3>Login Failed</h3>
          <p>Username or password incorrect</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
