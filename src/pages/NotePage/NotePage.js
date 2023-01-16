import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./NotePage.module.css";
import cn from "classnames";
import NoteItem from "../../components/NoteItem/NoteItem";
import axios from "axios";
import { Link } from "react-router-dom";

const NotePage = () => {
  const rootCls = cn();

  const [notesList, setNotesList] = useState([]);

  const getNotesHandler = useCallback(async () => {
    const response = await axios.get("http://localhost:8000/api/v1/note");

    setNotesList(response.data.data);
    console.log(response.data.data);
  }, []);

  useEffect(() => {
    getNotesHandler();
  }, []);
  return (
    <div className={rootCls}>
      <div className="flex justify-center items-center my-8">
        <h1>Your Notes are here, {localStorage.getItem("username")}</h1>
      </div>
      <div className="flex justify-center items-center">
        <Link to="/createnote">
          {" "}
          <button className="bg-green-500 p-4 rounded-lg hover:shadow-lg duration-300">
            Create New Note
          </button>
        </Link>
      </div>
      <div>
        {notesList.length === 0 ? (
          <h1 className="text-center my-10">You don't have any notes yet.</h1>
        ) : (
          <div>
            {notesList.map((item, index) => {
              return (
                <NoteItem
                  key={index}
                  id={item.id}
                  name={item.name}
                  subject={item.subject}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

NotePage.propTypes = {};

NotePage.defaultProps = {};

export default NotePage;
