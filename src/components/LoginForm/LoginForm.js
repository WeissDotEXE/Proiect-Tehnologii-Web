import React, { useEffect, useState } from "react";
import "./loginform.css";
import axios from "axios";

const LoginForm = () => {
  const onFinish = (values) => {
    const { username, password } = values;
    axios
      .post("http//http://localhost:3000/validatepass", { username, password })
      .then((res) => {
        if (res.data.validation) {
          alert("merge");
        } else {
          alert("parola gresita");
        }
      });
  };

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

        <div className="alt-login margin-auto margin-top-2"></div>
        <p className="text-color align-center margin-bottom-2">
          Dont have an account? Register here.
        </p>

        <div className={popupStyle}>
          <h3>Login Failed</h3>
          <p>Username or password incorrect</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
