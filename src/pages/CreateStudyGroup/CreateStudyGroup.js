import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./CreateStudyGroup.module.css";
import cn from "classnames";
import Input from "../../components/Input/Input";
import axios from "axios";

const CreateStudyGroup = () => {
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const rootCls = cn(
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "h-screen",
    "w-full"
  );

  const inputList = [
    {
      label: "Group Name",
      inputType: "text",
      placeholder: "Type group name here",
      value: groupName,
      handleChange: (event) => {
        setGroupName(event.target.value);
      },
    },
    {
      label: "Description",
      inputType: "text",
      placeholder: "Type description here",
      value: description,
      handleChange: (event) => {
        setDescription(event.target.value);
      },
    },
  ];

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/studygroup",
        {
          name: groupName,
          description,
        }
      );

      console.log(response);
    } catch (error) {
      if (error.response) console.log(error.response.data);
    }
  };

  return (
    <div className={rootCls}>
      Create Study Group
      <form onSubmit={onSubmit}>
        {inputList.map((item, index) => {
          return (
            <Input
              key={index}
              inputType={item.inputType}
              placeholder={item.placeholder}
              value={item.value}
              label={item.label}
              onChange={item.handleChange}
            />
          );
        })}
        <div className="flex justify-center">
          <button className="bg-green-400 rounded-lg p-4 hover:drop-shadow-lg duration-300">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

CreateStudyGroup.propTypes = {};

CreateStudyGroup.defaultProps = {};

export default CreateStudyGroup;
