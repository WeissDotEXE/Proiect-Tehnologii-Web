import React, { useEffect, useState } from "react";
import "./loginform.css";
import axios from "axios";
import Input from "../Input/Input";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onFinish = async (e) => {
    e.preventDefault();
    console.log(username, password);
    if (username === "" || password === "") return;
    const response = await axios.get(
      `http://localhost:8000/api/v1/auth/login`,
      {
        username,
        password,
      }
    );
    console.log(response);
  };

  return (
    <form onSubmit={onFinish}>
      <div className="cover">
        <h1 className="align-center text-color margin-top-2">Login</h1>

        <Input
          value={username}
          placeholder="Type username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          value={password}
          placeholder="Type password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className=" login-btn align-center">
          Login
        </button>

        <div className="alt-login margin-auto margin-top-2"></div>
        <p className="text-color align-center margin-bottom-2">
          Dont have an account?
          <Link to="/register">
            <button>Register here</button>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
