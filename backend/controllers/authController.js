const registerUser = (req, res) => {
  res.status(201).json({
    status: "succes register",
  });
};

const loginUser = (req, res) => {
  let username = request.body.username;
  let password = request.body.password;
  if (username && password) {
    // Execute SQL query that'll select the account from the database based on the specified username and password
    connection.query(
      "SELECT * FROM accounts WHERE username = ? AND password = ?",
      [username, password],
      function (error, results, fields) {
        if (error) throw error;
        // If the account exists
        if (results.length > 0) {
          // Authenticate the user
          request.session.loggedin = true;
          request.session.username = username;
          // Redirect to home page
          response.redirect("/home");
        }
      }
    );
  } else {
    response.send("Incorrect Username and/or Password!");
  }
};

export { loginUser, registerUser };
