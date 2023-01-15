import React from "react";
import PropTypes from "prop-types";
import styles from "./Note.module.css";

const Note = (props) => {
  const { id, name, content, subject } = props;

  return (
    <div className="Note">
      <div className="note__body"></div>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
        <button className="btnDelete">Delete</button>
      </div>
    </div>
  );
};

Note.propTypes = {};

Note.defaultProps = {};

export default Note;
