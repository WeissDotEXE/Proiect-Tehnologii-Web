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

const getAllStudyGroups = async (req, res, next) => {
  try {
    sql = selectAllStudyGroupsQuery;
    let studyGroupList;
    db.all(sql, [], (err, rows) => {
      if (err)
        return res.status(400).json({ status: "fail", message: err.message });
      studyGroupList = rows.map((row) => {
        return row;
      });
      console.log(studyGroupList);
    });
    res.status(200).json({ status: "succes", data: studyGroupList });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error });
  }
};

const getStudyGroup = async (req, res) => {
  sql = selectStudyGroupQuery(id);
  const id = req.params.id;
  db.all(sql, [id], (err, row) => {
    if (err) {
      res.status(400).json({ status: "fail", message: "Something went wrong" });
    }
    res.status(200).json({ status: "succes", data: row });
  });
};

const createStudyGroup = async (req, res) => {
  sql = insertStudyGroupQuery;
  const { name, description } = req.body;
  db.run(sql, [name, description], (err) => {
    if (err) {
      res
        .status(400)
        .json({ status: "fail", code: err.code, message: err.message });
    }
    res.status(200).json({ status: "succes", data: { name, description } });
  });
};

const updateStudyGroup = async (req, res) => {
  sql = updateStudyGroupQuery;
};

const deleteStudyGroup = async (req, res) => {
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

const insertMessage = async (req, res) => {
  sql = insertMessageStudyGroupQuery;
  const { studyGroupId, userId, username, message } = req.body;
  db.run(sql, [studyGroupId, userId, username, message], (err) => {
    if (err) {
      res.status(400).json({ status: "fail", message: "Something went wrong" });
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
