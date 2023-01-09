//STUDY GROUPS queries
const createStudyGroupTableQuery =
  "create table studygroups(id integer primary key,name,message,description)";
const insertStudyGroupQuery = `insert into studygroups(name,description) values(?,?,?)`;
const insertMessageStudyGroupQuery = `insert into studygroups(?) where id=? values(?,?)`;
const selectAllStudyGroupsQuery = `Select * from studygroups where id=? values(?)`;
const selectStudyGroupQuery = `select * from studygroup where id=? values(?)`;
const updateStudyGroupQuery = `update studygroups set name=? where id=?`;
const deleteStudyGroupTableQuery = "drop table studygroups";
const deleteStudyGroupQuery = "DELETE FROM studygroups WHERE id=? values(?)";

//LOGIN/REGISTER queries]
const insertUserQuery = "insert into users(name,email)  values(?,?,?)";

export {
  createStudyGroupTableQuery,
  insertMessageStudyGroupQuery,
  insertStudyGroupQuery,
  selectAllStudyGroupsQuery,
  selectStudyGroupQuery,
  updateStudyGroupQuery,
  deleteStudyGroupTableQuery,
  deleteStudyGroupQuery,
  insertUserQuery,
};
