// // getAllStudyGroups,
//   getStudyGroup,
//   createStudyGroup,
//   updateStudyGroup,
//   deleteStudyGroup,
import {
  insertStudyGroupQuery,
  selectAllStudyGroupsQuery,
  selectStudyGroupQuery,
  updateStudyGroupQuery,
  deleteStudyGroupTableQuery,
  deleteStudyGroupQuery,
  createMessagesTableQuery,
  insertMessageStudyGroupQuery,
  deleteMessageTableQuery,
} from "../utils/queries.js";
import sqlite3 from "sqlite3";

let sql;
const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.log(err.message);
});

//success
const getAllStudyGroups = async (req, res, next) => {
  try {
    sql = selectAllStudyGroupsQuery;
    db.all(sql, [], (err, rows) => {
      if (err)
        return res.status(400).json({ status: "fail", message: err.message });
      res.status(200).json({ status: "succes", data: rows });
    });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error });
  }
};

//success
const getStudyGroup = async (req, res) => {
  const { id } = req.params;
  sql = selectStudyGroupQuery(id);
  db.get(sql, (err, row) => {
    if (err) {
      res.status(400).json({ status: "fail", message: err.message });
    }
    res.status(200).json({ status: "succes", data: row });
  });
};

//success
const createStudyGroup = async (req, res) => {
  sql = insertStudyGroupQuery;
  const { name, description } = req.body;
  db.run(sql, [name, description], (err, row) => {
    if (err) {
      res
        .status(400)
        .json({ status: "fail", code: err.code, message: err.message });
    }
    res.status(200).json({ status: "succes", data: row });
  });
};

const updateStudyGroup = async (req, res) => {
  sql = updateStudyGroupQuery;
};

//success
const deleteStudyGroup = async (req, res) => {
  const { id } = req.params;
  sql = deleteStudyGroupQuery(id);
  db.run(sql, (err) => {
    if (err) {
      res.status(400).json({ status: "fail", message: err.message });
    }
    res
      .status(204)
      .json({ status: "succes", message: "Study group has been deleted" });
  });
};

const insertMessage = async (req, res) => {
  const { studyGroupId, userId, username, message } = req.body;
  sql = insertMessageStudyGroupQuery;
  db.run(sql, [studyGroupId, userId, username, message], (err) => {
    if (err) {
      res.status(400).json({ status: "fail", message: err.message });
    }
    res.status(200).json({
      status: "succes",
      message: `message inserted in studygroup ${studyGroupId}`,
    });
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
