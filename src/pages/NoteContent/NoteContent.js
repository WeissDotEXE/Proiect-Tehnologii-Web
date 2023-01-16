import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./NoteContent.module.css";
import axios from "axios";
import { useParams } from "react-router";

const NoteContent = () => {
  const { id } = useParams();

  const [data, setData] = useState();

  const getDataHandler = useCallback(async () => {
    const response = await axios.get(`http://localhost:8000/api/v1/note/${id}`);
    console.log(response.data.data.name);
    setData(response.data.data);
  }, []);

  useEffect(() => {
    getDataHandler();
  }, []);

  return (
    <div className={styles.NoteContent}>
      <div className="my-10">{data && data.name}</div>
      <div>{data && data.content}</div>
    </div>
  );
};

NoteContent.propTypes = {};

NoteContent.defaultProps = {};

export default NoteContent;
