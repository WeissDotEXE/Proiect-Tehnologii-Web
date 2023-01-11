import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./StudyGroupPage.module.css";
import StudyGroupTask from "../../components/StudyGroupTask/StudyGroupTask";

const StudyGroupPage = () => {
  const rootCls = cn(styles.StudyGroupPage);
  return (
    <div className={rootCls}>
      <h1>HEHEHEH</h1>
      <StudyGroupTask id="id" name="testName" />
    </div>
  );
};

StudyGroupPage.propTypes = {};

StudyGroupPage.defaultProps = {};

export default StudyGroupPage;
