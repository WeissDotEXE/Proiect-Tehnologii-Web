import express from "express";
import studyGroupRouter from "./routes/studyGroupsRoutes.js";
import authRouter from "./routes/authRouter.js";
import sqlite3 from "sqlite3";
import noteRouter from "./routes/noteRouter.js";
import taskRouter from "./routes/taskRouter.js";
import {
  createStudyGroupTableQuery,
  deleteStudyGroupTableQuery,
  dropNotesTableQuery,
  createNotesTableQuery,
  dropTasksTableQuery,
  createTasksTableQuery,
  createCredentialsTable,
  deleteCredentialsTableQuery,
  createMessagesTableQuery,
  deleteMessageTableQuery,
} from "./utils/queries.js";
import cors from "cors";

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
db.run(createNotesTableQuery);
db.run(createTasksTableQuery);
db.run(createCredentialsTable);
db.run(createStudyGroupTableQuery);
db.run(createMessagesTableQuery);

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
app.use("/api/v1/note", noteRouter);
app.use("/api/v1/task", taskRouter);

export default app;
