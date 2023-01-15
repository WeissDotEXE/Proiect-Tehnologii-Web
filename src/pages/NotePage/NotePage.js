import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import "./NotePage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Note from "../../components/Note/Note";

const NotePage = () => {
  const [noteList, setNoteList] = useState([]);
  const getDataHandler = async () => {
    const response = await axios.get("http://localhost:8000/api/v1/note/1");
    console.log(response);
    setNoteList(response.data.data);
  };

  useEffect(() => {
    getDataHandler();
  }, []);

  return (
    <div id="base">
      <div id="titleDiv">
        <h1 id="title">Notes</h1>
      </div>

      <div className="notes">
        {noteList.map((item, index) => {
          return <Note />;
        })}
      </div>
    </div>
  );
};

export default NotePage;
