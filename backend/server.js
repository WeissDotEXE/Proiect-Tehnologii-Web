import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({ path: "./config.env" });
const port = process.env.port;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
