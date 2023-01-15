import express from "express";
import studyGroupRouter from "./routes/studyGroupsRoutes.js";
import authRouter from "./routes/authRouter.js";
import sqlite3 from "sqlite3";
import cors from "cors";
import {
  createStudyGroupTableQuery,
  deleteStudyGroupTableQuery,
} from "./utils/queries.js";

//connect to db
const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.log(err.message);
});
let sql;

//create table
//!!!run once (we don't need to create multiple tables with same data)!!!

// sql = `create table studygroups(id integer primary key,first_name,last_name,password,email)`;
// db.run(createStudyGroupTableQuery);
//drop table
// db.run(deleteStudyGroupTableQuery);

//insert data into table
// sql = `insert into students(first_name,last_name,password,email) VALUES(?,?,?,?)`;
// db.run(sql, ["mike", "michaelSOn", "pass", "email@gmail.com"], (err) => {
//   if (err) return console.error(err.message);
// });

//query the database
// sql = `Select * from students`;
// db.all(sql, [], (err, rows) => {
//   if (err) return console.error(err.message);
//   rows.forEach((row) => {
//     console.log(row);
//   });
// });

const app = express();
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/studygroup", studyGroupRouter);
app.use("/api/v1/auth", authRouter);

export default app;
