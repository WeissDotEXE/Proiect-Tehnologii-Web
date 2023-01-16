import React from "react";
import PropTypes from "prop-types";
import styles from "./NoteItem.module.css";
import { Link } from "react-router-dom";
const NoteItem = (props) => {
  const { id, name, subject } = props;

  return (
    <Link to={`/notes/:${id}`}>
      <div className={styles.NoteItem}>
        <h1>{name}</h1>
        <h1>{subject}</h1>
      </div>
    </Link>
  );
};

NoteItem.propTypes = {};

NoteItem.defaultProps = {};

export default NoteItem;
