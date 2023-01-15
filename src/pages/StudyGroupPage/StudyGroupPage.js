import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./StudyGroupPage.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const StudyGroupPage = () => {
  const [studyGroups, setStudyGroups] = useState([]);

  const getDataHandler = async () => {
    const response = await axios.get("http://localhost:8000/api/v1/studygroup");
    console.log(response);
    setStudyGroups(response.data.data);
  };

  const studyGroupItemClass = cn(
    "flex",
    "bg-gray-300",
    "p-7",
    "my-3",
    "mx-5",
    "rounded-lg"
  );

  useEffect(() => {
    getDataHandler();
  }, []);

  const rootCls = cn(styles.StudyGroupPage, "w-full");
  return (
    <div className={rootCls}>
      {studyGroups.length === 0 ? (
        <div className="flex flex-col text-center justify-center items-center h-screen w-full">
          <h1 className="mb-5">No study groups yet.</h1>
          <Link to="/createstudygroup">
            <button className="bg-green-400 p-5 rounded-lg hover:drop-shadow-xl duration-300">
              Create study group
            </button>
          </Link>
        </div>
      ) : (
        <div>
          {studyGroups.map((item, index) => {
            return (
              <Link key={index} className={studyGroupItemClass}>
                <div className="flex w-full justify-between">
                  <h1>{item.name}</h1>
                  <h1>{item.description}</h1>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

StudyGroupPage.propTypes = {};

StudyGroupPage.defaultProps = {};

export default StudyGroupPage;
