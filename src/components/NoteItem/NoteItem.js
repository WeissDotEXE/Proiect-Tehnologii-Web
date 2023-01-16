import React from "react";
import PropTypes from "prop-types";
import styles from "./NoteItem.module.css";
import { Link } from "react-router-dom";
import cn from "classnames";
const NoteItem = (props) => {
  const { id, name, subject } = props;

  const rootCls = cn(
    "flex",
    "bg-gray-200",
    "justify-between",
    "my-5",
    "p-4",
    "rounded-lg"
  );

  return (
    <Link to={`/notes/${id}`}>
      <div className={rootCls}>
        <h1>{name}</h1>
        <h1>{subject}</h1>
      </div>
    </Link>
  );
};

NoteItem.propTypes = {};

NoteItem.defaultProps = {};

export default NoteItem;
