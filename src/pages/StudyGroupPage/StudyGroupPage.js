import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./StudyGroupPage.module.css";
import { Link } from "react-router-dom";

const StudyGroupPage = () => {
  const [studyGroups, setStudyGroups] = useState([]);

  const rootCls = cn(styles.StudyGroupPage, "w-full");
  return (
    <div className={rootCls}>
      {studyGroups.length === 0 && (
        <div className="flex flex-col text-center justify-center items-center h-screen w-full">
          <h1 className="mb-5">No study groups yet.</h1>
          <Link to="/createstudygroup">
            <button className="bg-green-400 p-5 rounded-lg hover:drop-shadow-xl duration-300">
              Create study group
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

StudyGroupPage.propTypes = {};

StudyGroupPage.defaultProps = {};

export default StudyGroupPage;
