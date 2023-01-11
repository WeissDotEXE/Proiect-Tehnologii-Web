import React from "react";
import PropTypes from "prop-types";
import styles from "./StudyGroupTask.module.css";

const StudyGroupTask = (props) => {
  const { id, name } = props;

  return <div className={styles.StudyGroupTask}>{name}</div>;
};

StudyGroupTask.propTypes = {};

StudyGroupTask.defaultProps = {};

export default StudyGroupTask;
