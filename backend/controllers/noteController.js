import {
  createNotesTableQuery,
  insertNotesQuery,
  updateNotesQuery,
  deleteNotesQuery,
  dropNotesTableQuery,
  selectNotesQuery,
  selectAllNotesQuery,
} from "../utils/queries.js";
import sqlite3 from "sqlite3";

let sql;
const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.log(err.message);
});

const getNote = async (req, res) => {
  const { id } = req.params;
  try {
    sql = selectNotesQuery(id);
    db.get(sql, (err, row) => {
      if (err) res.status(400).json({ status: "fail", message: err.message });
      res.status(200).json({ status: "succes", data: row });
    });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error });
  }
};

const createNote = async (req, res) => {
  sql = insertNotesQuery;

  const { name, content, subject, userID } = req.body;
  db.run(sql, [name, content, subject, userID], (err, row) => {
    if (err) {
      res
        .status(400)
        .json({ status: "fail", code: err.code, message: err.message });
    }
    res.status(200).json({ status: "succes", data: row });
  });
};

const deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    sql = deleteNotesQuery(id);
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

const updateNote = async (req, res) => {
  const { id } = req.params;

  try {
    sql = updateNotesQuery(id);
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

const getAllNotes = async (req, res, next) => {
  try {
    sql = selectAllNotesQuery;
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

export { createNote, getNote, deleteNote, updateNote, getAllNotes };
