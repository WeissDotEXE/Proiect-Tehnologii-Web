import express from "express";
import studyGroupRouter from "./routes/studyGroupsRouter";
import authRouter from "./routes/authRouster";
import sqlite3 from "sqlite3";

//connect to db
const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.log(err.message);
});
let sql;

//create table
// sql = `create table students(id integer primary key,first_name,last_name,password,email)`;
// db.run(sql);
//drop table
// db.run("drop table students");

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

//routes
app.use("/api/v1/studygroup", studyGroupRouter);
app.use("/api/v1/auth", authRouter);
export default app;
