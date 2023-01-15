//STUDY GROUPS queries - create, insert, update, delete, drop
const createStudyGroupTableQuery =
  "create table studyGroups(id integer primary key,name,description)";
const insertStudyGroupQuery = `insert into studyGroups(name,description) values(?,?)`;

const selectAllStudyGroupsQuery = `Select * from studygroups`;
const selectStudyGroupQuery = (id) => {
  return `select * from studyGroups where id=${id}`;
};
const updateStudyGroupQuery = `update studygroups set name=?,description=? where id=?`;
const deleteStudyGroupTableQuery = "drop table studygroups";
const deleteStudyGroupQuery = (id) => {
  return `DELETE FROM studyGroups WHERE id=${id}`;
};

//Messages queries - create, insert,drop
const createMessagesTableQuery =
  "create table groupMessages(id integer primary key,studyGroupId,userId,username,message)";
const insertMessageStudyGroupQuery = `insert into groupMessages(studyGroupId,userId,username,message) values(?,?,?,?)`;
const deleteMessageTableQuery = "drop table groupMessages";

//LOGIN/REGISTER queries]
const insertUserQuery = "insert into users(name,email)  values(?,?,?)";

//Notes queries - create, insert, update, delete, drop, select, selectAll:

const createNotesTableQuery =
  "create table if not exists notes(id integer primary key, name, content, subject, userID)";
const insertNotesQuery =
  "insert into notes(name, content, subject) values(?,?,?,?)";
const updateNotesQuery = "update notes set name=?, content=?, subject=?";
const deleteNotesQuery = (id) => {
  return `DELETE FROM notes WHERE id=${id}`;
};
const dropNotesTableQuery = "drop table notes";
const selectNotesQuery = (id) => {
  return `SELECT FROM notes WHERE id=${id}`;
};
const selectAllNotesQuery = `SELECT * FROM notes `;

//Task queries - create, insert, update, delete, drop, select, selectALL:
const createTasksTableQuery =
  "create table if not exists tasks(id integer primary key, name, content, userID)";
const insertTasksQuery =
  "insert into tasks(name, content, userID) values(?,?,?)";
const updateTasksQuery = "update tasks set name=?, content=?";
const deleteTasksQuery = (id) => {
  return `DELETE FROM tasks WHERE id=${id}`;
};
const dropTasksTableQuery = "drop table tasks";
const selectTasksQuery = (id) => {
  return `SELECT FROM tasks WHERE id=${id}`;
};
const selectAllTasksQuery = `SELECT * FROM tasks `;

export {
  createStudyGroupTableQuery,
  insertStudyGroupQuery,
  selectAllStudyGroupsQuery,
  selectStudyGroupQuery,
  updateStudyGroupQuery,
  deleteStudyGroupTableQuery,
  deleteStudyGroupQuery,
  createMessagesTableQuery,
  insertMessageStudyGroupQuery,
  deleteMessageTableQuery,
  insertUserQuery,
  createNotesTableQuery,
  insertNotesQuery,
  updateNotesQuery,
  deleteNotesQuery,
  dropNotesTableQuery,
  selectNotesQuery,
  selectAllNotesQuery,
  createTasksTableQuery,
  insertTasksQuery,
  updateTasksQuery,
  deleteTasksQuery,
  dropTasksTableQuery,
  selectTasksQuery,
  selectAllTasksQuery,
};
