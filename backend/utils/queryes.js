//STUDY GROUPS queries
const createStudyGroupTableQuery =
  "create table studygroups(id integer primary key,name,message,description)";
const insertStudyGroupQuery = `insert into studygroups(name,message,description) values(?,?,?)`;
const insertMessageStudyGroupQuery = `insert into studygroups(message) where id=? values(?,?)`;
const selectAllStudyGroupsQuery = `Select * from studygroups`;
const selectStudyGroupQuery = `select * from studygroup where id=? values(?)`;
const updateStudyGroupQuery = `update studygroups set name=? where id=?`;
const deleteStudyGroupTableQuery = "drop table studygroups";

export {
  createStudyGroupTableQuery,
  insertMessageStudyGroupQuery,
  insertStudyGroupQuery,
  selectAllStudyGroupsQuery,
  selectStudyGroupQuery,
  updateStudyGroupQuery,
  deleteStudyGroupTableQuery,
};
