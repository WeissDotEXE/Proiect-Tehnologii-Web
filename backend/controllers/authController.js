const registerUser = (req, res) => {
  res.status(201).json({
    status: "succes register",
  });
};
const loginUser = (req, res) => {
  res.status(201).json({
    status: "succes login",
  });
};
export { loginUser, registerUser };
