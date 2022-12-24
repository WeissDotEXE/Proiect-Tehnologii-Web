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
  sql = selectStudyGroupQuery;
};

const createStudyGroup = (req, res) => {
  sql = insertStudyGroupQuery;
};

const updateStudyGroup = (req, res) => {
  sql = updateStudyGroupQuery;
};

const deleteStudyGroup = (req, res) => {
  sql = deleteStudyGroupQuery;
};

const insertMessage = (req, res) => {
  sql = insertMessageStudyGroupQuery;
};

export {
  getAllStudyGroups,
  getStudyGroup,
  createStudyGroup,
  updateStudyGroup,
  deleteStudyGroup,
};
