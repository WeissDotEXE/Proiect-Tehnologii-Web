import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./CreateNote.module.css";
import axios from "axios";
import Input from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [userID, setUserID] = useState(localStorage.getItem("userID"));

  const submitHandler = async (e) => {
    e.preventDefault();
    if (name === "" || subject === "" || content === "") return;
    const response = await axios.post("http://localhost:8000/api/v1/note", {
      name,
      subject,
      content,
      userID,
    });
    console.log(response);
    navigate("/notes");
  };

  return (
    <div className={styles.CreateNote}>
      <h1 className="text-center my-10">Create Note</h1>
      <form onSubmit={submitHandler}>
        <Input
          value={name}
          placeholder="Note name"
          label="Note Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          value={subject}
          placeholder="Subject Name"
          label="Subject Name"
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />
        <Input
          value={content}
          placeholder="Content"
          label="Content"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <div className="flex justify-center items-center my-10">
          <button type="submit" className="bg-green-500 p-5 rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

CreateNote.propTypes = {};

CreateNote.defaultProps = {};

export default CreateNote;
