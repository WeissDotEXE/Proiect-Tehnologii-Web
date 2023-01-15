import {
  createTasksTableQuery,
  insertTasksQuery,
  updateTasksQuery,
  deleteTasksQuery,
  dropTasksTableQuery,
  selectTasksQuery,
  selectAllTasksQuery,
} from "../utils/queries.js";
import sqlite3 from "sqlite3";

let sql;
const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.log(err.message);
});

const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    sql = selectTasksQuery(id);
    db.get(sql, (err, row) => {
      if (err) res.status(400).json({ status: "fail", message: err.message });
      res.status(200).json({ status: "succes", data: row });
    });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error });
  }
};

const createTask = async (req, res) => {
  sql = insertTasksQuery;

  const { name, content, userID } = req.body;
  db.run(sql, [name, content, userID], (err, row) => {
    if (err) {
      res
        .status(400)
        .json({ status: "fail", code: err.code, message: err.message });
    }
    res.status(200).json({ status: "succes", data: row });
  });
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    sql = deleteTasksQuery(id);
    db.run(sql, (err) => {
      if (err) res.status(400).json({ status: "fail", message: err.message });
      res
        .status(204)
        .json({ status: "succes", message: "Note has been deleted" });
    });
  } catch {
    res.status(400).json({ status: "fail", message: error });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;

  try {
    sql = updateTasksQuery(id);
    db.run(sql, (err) => {
      if (err) res.status(400).json({ status: "fail", message: err.message });
      res
        .status(204)
        .json({ status: "succes", message: "Study group has been deleted" });
    });
  } catch {
    res.status(400).json({ status: "fail", message: error });
  }
};

const getAllTasks = async (req, res, next) => {
  try {
    sql = selectAllTasksQuery;
    db.all(sql, [], (err, rows) => {
      if (err)
        return res.status(400).json({ status: "fail", message: err.message });
      res.status(400).json({ status: "succes", data: rows });
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: "fail", message: error });
  }
};

export { createTask, getTask, deleteTask, updateTask, getAllTasks };
