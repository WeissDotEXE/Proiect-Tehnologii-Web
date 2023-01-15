// !!!!!!!!!!de schimbat username si userId
//liniile 49-50

import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./StudyGroupMessage.module.css";
import cn from "classnames";
import { useParams } from "react-router";
import axios from "axios";
import Input from "../../components/Input/Input";

const StudyGroupMessage = () => {
  const { groupId, groupName } = useParams();
  const [messagesList, setMessagesList] = useState();
  const [message, setMessage] = useState("");

  const rootCls = cn(
    "bg-gray-300",
    "h-screen",
    "m-10",
    "rounded-xl",
    "relative"
  );
  const messageItemCls = cn(
    "bg-white",
    "rounded-lg",
    "my-10",
    "ml-3",
    "p-3",
    "w-56",
    "overflow-auto"
  );

  const fetchMessagesHandler = useCallback(async () => {
    const response = await axios.get(
      `http://localhost:8000/api/v1/studygroup/messages/${groupId}`
    );
    console.log(response.data.data);
    setMessagesList(response.data.data);
  }, []);

  const postMessageHandler = async (event) => {
    event.preventDefault();
    if (message.length === 0) return;
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/studygroup/messages/${groupId}`,
        {
          userId: 1,
          username: "UserTest",
          message,
        }
      );
      console.log(response);
      setMessage("");
      fetchMessagesHandler();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMessagesHandler();
  }, []);

  return (
    <div className={rootCls}>
      <div className="bg-black text-white rounded-t-xl p-3">
        {groupName} group
      </div>
      <div className="h-5/6 overflow-auto">
        {messagesList &&
          messagesList.map((item, index) => {
            return (
              <div key={index} className={messageItemCls}>
                <h1 className="text-orange-500 mb-2">{item.username}</h1>
                <h3 className="text-xs">{item.message}</h3>
              </div>
            );
          })}
      </div>
      <form className="w-full absolute bottom-0" onSubmit={postMessageHandler}>
        <Input
          placeholder="type your message here"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button
          type="submit"
          className="absolute right-24 top-5 bg-green-500 p-4 rounded-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
};

StudyGroupMessage.propTypes = {};

StudyGroupMessage.defaultProps = {};

export default StudyGroupMessage;
