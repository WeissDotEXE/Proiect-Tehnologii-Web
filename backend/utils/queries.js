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

//Create, insert, drop, ---FOR LOGIN
const createCredentialsTable =
  "create table if not exists credentials(id integer primary key,username,password )";
const deleteCredentialsTableQuery = "drop table credentials";
//Adauga date in baza de date
const insertCredential =
  "INSERT INTO credentials(username, password) VALUES (?,?)";

//LOGIN/REGISTER queries]
const getUsersQuery = "select * from credentials";
// const insertUserQuery = "insert into users(name,email)  values(?,?,?)";
const selectAllCredidentials = `SELECT * FROM CREDITENTIALS`;
const validatePassQuery = (username, password) => {
  return `select * from credentials where username like '${username}' and password like '${password}'`;
};

export {
  insertCredential,
  createCredentialsTable,
  validatePassQuery,
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
  getUsersQuery,
  deleteCredentialsTableQuery,
};
