import React, { useEffect, useState } from "react";
import "./registerform.css";
import axios from "axios";
import Input from "../Input/Input";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onFinish = async (e) => {
    e.preventDefault();
    console.log(username, password);
    if (username === "" || password === "") return;
    const response = await axios.post(
      `http://localhost:8000/api/v1/auth/register`,
      {
        username,
        password,
      }
    );
    console.log(response);
    localStorage.setItem("username", response.data.data.username);
    localStorage.setItem("userID", response.data.data.id);
    navigate("/notes");
  };

  return (
    <form onSubmit={onFinish}>
      <div className="cover">
        <h1 className="align-center text-color margin-top-2">Register</h1>
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
      </div>
    </form>
  );
};

export default LoginForm;
