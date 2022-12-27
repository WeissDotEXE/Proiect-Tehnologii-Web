const registerUser = (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res
      .status(400)
      .json({ status: "fail", message: "email is required" });
  }
  if (!password) {
    return res
      .status(400)
      .json({ status: "fail", message: "password is required" });
  }
  res.status(201).json({
    status: "succes",
    message: "user registered",
  });
};

const loginUser = (req, res) => {
  // let username = request.body.username;
  // let password = request.body.password;
  // if (username && password) {
  //   // Execute SQL query that'll select the account from the database based on the specified username and password
  //   connection.query(
  //     "SELECT * FROM accounts WHERE username = ? AND password = ?",
  //     [username, password],
  //     function (error, results, fields) {
  //       if (error) throw error;
  //       // If the account exists
  //       if (results.length > 0) {
  //         // Authenticate the user
  //         req.session.loggedin = true;
  //         req.session.username = username;
  //         res.send(200).json({
  //           status: "succes",
  //           message: "login succes",
  //         });
  //       }
  //     }
  //   );
  // } else {
  //   res.send("Incorrect Username and/or Password!");
  // }
  const { email, password } = req.body;
  if (!email) {
    return res
      .status(400)
      .json({ status: "fail", message: "email is required" });
  }
  if (!password) {
    return res
      .status(400)
      .json({ status: "fail", message: "password is required" });
  }
  res.status(201).json({
    status: "succes",
    message: "user logged in",
  });
};

export { loginUser, registerUser };
