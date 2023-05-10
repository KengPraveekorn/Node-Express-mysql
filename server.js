const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "me_live_code_api",
});

const app = express();
app.use(cors()); // cors ทำให้สามารถรันข้าม domain ได้
app.use(express.json());

app.get("/users", (req, res, next) => {
  connection.query("SELECT * FROM `users`", (err, result, fields) => {
    res.json(result);
  });
});

app.get("/users/:id", (req, res, next) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM `users` WHERE `id` = ?",
    [id],
    (err, result) => {
      res.json(result);
    }
  );
});

app.post("/users", (req, res, next) => {
  connection.query(
    "INSERT INTO me_live_code_api.users (`fname`,`lname`,`username`,`password`,`avatar`) VALUES (?,?,?,?,?)",
    [req.body.fname,req.body.lname,req.body.username,req.body.password,req.body.avatar],
    (err, result) => {
      res.json(result);
    }
  );
});

app.put("/users", (req, res, next) => {
  connection.query(
    "Update me_live_code_api.users SET `fname` = ?,`lname` = ?,`username` = ?,`password` = ?,`avatar` = ? where id = ?",
    [req.body.fname,req.body.lname,req.body.username,req.body.password,req.body.avatar,req.body.id],
    (err, result) => {
      res.json(result);
    }
  );
});

app.delete("/users", (req, res, next) => {
  connection.query(
    "DELETE FROM me_live_code_api.users where id = ?",
    [req.body.id],
    (err, result) => {
      res.json(result);
    }
  );
});

const port = 5000;
app.listen(port, () => {
  console.log("Server is running port " + port);
});
