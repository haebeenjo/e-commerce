const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const render = require("./render");

const router = require("./routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/api", router);
app.use("/", render);
app.set("views", path.join(__dirname, "./views"));
app.use(express.static("public"));

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT, "포트로 서버가 열렸어요!");
});

module.exports = app;
