//STUDY GROUPS queries
const createStudyGroupTable =
  "create table studygroups(id integer primary key,name,message,description)";
const insertStudyGroup = `insert into studygroups(name,description) values(?,?,?)`;
const insertMessageStudyGroup = `insert into studygroups(?) where id=? values(?,?)`;
const selectAllStudyGroups = `Select * from studygroups where id=? values(?)`;
const selectStudyGroup = `select * from studygroup where id=? values(?)`;
const updateStudyGroup = `update studygroups set name=? where id=?`;
const deleteStudyGroupTable = "drop table studygroups";
const deleteStudyGroupQuery = "DELETE FROM studygroups WHERE id=? values(?)";

//LOGIN/REGISTER queries]
const insertUserQuery = "insert into users(name,email)  values(?,?,?)";

export {
  createStudyGroupTable,
  insertMessageStudyGroup,
  insertStudyGroup,
  selectAllStudyGroups,
  selectStudyGroup,
  updateStudyGroup,
  deleteStudyGroupTable,
  deleteStudyGroupQuery,
  insertUserQuery,
};
