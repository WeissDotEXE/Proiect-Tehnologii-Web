//STUDY GROUPS queries - create, insert, update, delete, drop
const createStudyGroupTableQuery =
  "create table if not exists studyGroups(id integer primary key,name,description)";
const insertStudyGroupQuery = `insert into studyGroups(name,description) values(?,?)`;

const selectAllStudyGroupsQuery = `Select * from studyGroups`;
const selectStudyGroupQuery = (id) => {
  return `select * from studyGroups where id=${id}`;
};
const updateStudyGroupQuery = (id) => {
  return `update studygroups set name=?,description=? where id=${id}`;
};
const deleteStudyGroupTableQuery = "drop table studygroups";
const deleteStudyGroupQuery = (id) => {
  return `DELETE FROM studyGroups WHERE id=${id}`;
};

//Messages queries - create, insert,drop
const createMessagesTableQuery =
  "create table if not exists groupMessages(id integer primary key,studyGroupId,userId,username,message)";
const insertMessageStudyGroupQuery = `insert into groupMessages(studyGroupId,userId,username,message) values(?,?,?,?)`;
const selectMessagesStudyGroupQuery = (id) => {
  return `select * from groupMessages where studyGroupId=${id}`;
};
const deleteMessageTableQuery = "drop table groupMessages";

//LOGIN/REGISTER queries]
const insertUserQuery = "insert into users(name,email)  values(?,?,?)";

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
  selectMessagesStudyGroupQuery,
  deleteMessageTableQuery,
  insertUserQuery,
};
