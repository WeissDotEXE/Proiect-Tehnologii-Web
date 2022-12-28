// // getAllStudyGroups,
//   getStudyGroup,
//   createStudyGroup,
//   updateStudyGroup,
//   deleteStudyGroup,
import {
  createStudyGroupTableQuery,
  insertMessageStudyGroupQuery,
  insertStudyGroupQuery,
  selectAllStudyGroupsQuery,
  selectStudyGroupQuery,
  updateStudyGroupQuery,
  deleteStudyGroupTableQuery,
  deleteStudyGroupQuery,
} from "../utils/queryes.js";
import sqlite3 from "sqlite3";

let sql;
const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.log(err.message);
});

const getAllStudyGroups = (req, res) => {
  sql = selectAllStudyGroupsQuery;
  let studygroupList = [];
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log(err);
      res
        .status(400)
        .json({ status: "fail", message: "something went wrong!" });
    }
    rows.forEach((row) => {
      studygroupList.push(row);
      console.log(row);
    });
    res.status(200).json({ status: "succes", data: studygroupList });
  });
};

const getStudyGroup = (req, res) => {
  sql = selectStudyGroupQuery(id);
  const id = req.params.id;
  db.all(sql, [id], (err, row) => {
    if (err) {
      res.status(400).json({ status: "fail", message: "Something went wrong" });
    }
    res.status(200).json({ status: "succes", data: row });
  });
};

const createStudyGroup = (req, res) => {
  sql = insertStudyGroupQuery;
  const { name, description } = req.body;
  db.run(sql, [name, description], (err) => {
    if (err) {
      res.status(400).json({ status: "fail", message: "Something went wrong" });
    }
    res.status(200).json({ status: "succes", data: { name, description } });
  });
};

const updateStudyGroup = (req, res) => {
  sql = updateStudyGroupQuery;
};

const deleteStudyGroup = (req, res) => {
  const { id } = req.params;
  sql = deleteStudyGroup;
  db.run(sql, [id], (err) => {
    if (err) {
      res.status(400).json({ status: "fail", message: "Something went wrong" });
    }
    res
      .status(200)
      .json({ status: "succes", message: "message inserted in studygroup" });
  });
};

const insertMessage = (req, res) => {
  sql = insertMessageStudyGroupQuery;
  const { id } = req.params;
  const { message } = req.body;
  db.run(sql, [message, id], (err) => {
    if (err) {
      res.status(400).json({ status: "fail", message: "Something went wrong" });
    }
    res
      .status(200)
      .json({ status: "succes", message: "message inserted in studygroup" });
  });
};

export {
  getAllStudyGroups,
  getStudyGroup,
  createStudyGroup,
  updateStudyGroup,
  deleteStudyGroup,
  insertMessage,
};
