import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./StudyGroupPage.module.css";
import StudyGroupTask from "../../components/StudyGroupTask/StudyGroupTask";

const StudyGroupPage = () => {
  const rootCls = cn(styles.StudyGroupPage, "w-full");
  return (
    <div className={rootCls}>
      <StudyGroupTask id="id" name="Test Task" />
      <StudyGroupTask id="id" name="Test Task" />
      <StudyGroupTask id="id" name="Test Task" />
      <StudyGroupTask id="id" name="Test Task" />
    </div>
  );
};

StudyGroupPage.propTypes = {};

StudyGroupPage.defaultProps = {};

export default StudyGroupPage;
