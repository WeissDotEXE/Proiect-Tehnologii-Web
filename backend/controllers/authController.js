import {
  validatePassQuery,
  createCredentialsTable,
  getUsersQuery,
  insertCredential,
} from "../utils/queries.js";

import sqlite3 from "sqlite3";

let sql;
let db = new sqlite3.Database("./test.db", (err) => {
  if (err) {
    console.error(err.message);
  }
});

const registerUser = (req, res) => {
  const { username, password } = req.body;
  if (!username) {
    return res
      .status(400)
      .json({ status: "fail", message: "username is required" });
  }
  if (!password) {
    return res
      .status(400)
      .json({ status: "fail", message: "password is required" });
  }
  sql = insertCredential;
  db.run(sql, [username, password], (err, row) => {
    if (err) {
      res
        .status(400)
        .json({ status: "fail", code: err.code, message: err.message });
    }
  });

  db.get(
    `select * from credentials where username='${username}'`,
    (err, row) => {
      if (err) {
        res.status(400).json({ status: "fail", message: err.message });
      }
      res.status(200).json({ status: "successs", data: row });
    }
  );
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  sql = validatePassQuery(username, password);
  db.get(sql, (err, row) => {
    if (err) {
      res.status(400).json({ status: "fail", message: err.message });
    }
    if (row === undefined)
      return res
        .status(400)
        .json({ status: "fail", message: "wrong credentials" });
    res.status(200).json({ status: "succes", data: row });
  });
};

const getAllUsers = async (req, res, next) => {
  try {
    sql = getUsersQuery;
    db.all(sql, [], (err, rows) => {
      if (err)
        return res.status(400).json({ status: "fail", message: err.message });
      res.status(400).json({ status: "succes", data: rows });
    });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error });
  }
};

const validateapass = (req, res) => {
  const { username, password } = req.body;

  db.all(validatePass, (err, rows) => {
    if (err) {
      throw err;
    }
    if (rows.length > 0) {
      res.send({ validation: true });
    } else {
      res.send({ validation: false });
    }
  });
};

//creare tabel
const createCredentials = async (req, res) => {
  sql = insertCredential;
  const { username, password } = req.body;
  db.run(sql, [username, password], (err, row) => {
    if (err) {
      res
        .status(400)
        .json({ status: "fail", code: err.code, message: err.message });
    }
    res.status(200).json({ status: "succes", data: row });
  });
};

export {
  loginUser,
  registerUser,
  getAllUsers,
  validateapass,
  createCredentials,
};
