import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./StudyGroupTask.module.css";

const StudyGroupTask = (props) => {
  const { id, name } = props;

  const rootCls = cn(
    styles.StudyGroupTask,
    "flex",
    "justify-between",
    "items-center",
    "bg-gray-200",
    "mx-10",
    "my-4",
    "rounded-lg",
    "px-5 py-3",
    "cursor-pointer",
    "hover:bg-gray-400",
    "duration-300"
  );

  return (
    <div className={rootCls}>
      <h1>{name}</h1>
      <div>
        <button className="bg-green-500 rounded-lg p-3 text-white mr-4">
          Done
        </button>
        <button className="bg-red-500 rounded-lg p-3 text-white">Delete</button>
      </div>
    </div>
  );
};

StudyGroupTask.propTypes = {};

StudyGroupTask.defaultProps = {};

export default StudyGroupTask;
