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
