const express = require("express"); //npm install express
const cors = require("cors"); //npm install cors
const mysql = require("mysql2"); //npm install mysql2
const bodyParser = require("body-parser"); // npm install body-parser
const bcrypt = require("bcrypt"); // npm install bcrypt

//hajdemo startati backend na adresi http://localhost:8080
// i dodati servis /api/register
const app = express();
//Dozvoli CORS za sve rute
app.use(cors());
//Ona koristi i body parser -> json
app.use(bodyParser.json());

//MySQL konfiguracija
const configObject = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "frontend",
};
const connection = mysql.createConnection(configObject);
connection.connect((error) => {
  if (error) console.log(`Problem prilikom povezivanja na bazu. ${error}`);
  console.log("Povezani smo na bazu preko porta 3306");
});

//register endpoint/REST servis/API
app.post("/api/register", callbackOnRegister);
function callbackOnRegister(request, response) {
  const { username, email, password, name, surname } = request.body;
  const hashedPassword = bcrypt.hash(password, 10, (error, hash) => {
    if (error) {
      response.status(500).json({ message: "Imam problem sa hashiranjem" });
    } else {
      if (hash) {
        registerUser(username, email, hash, name, surname);
        response.status(200).json({ message: "Uspjesno registrovan" });
      } else {
      }
    }
  });
}

function registerUser(username, email, hashedPassword, name, surname) {
  //username , email
  const sqlInsertRegister =
    "INSERT INTO users (username,email,password,name,surname) VALUES (?,?,?,?,?)";
  const promise = connection
    .promise()
    .query(sqlInsertRegister, [username, email, hashedPassword, name, surname]);
  promise
    .then(() => {
      response.status(201).json({ message: "Uspješno registrovan korisnik" });
    })
    .catch((error) => {
      response.status(500).json({ message: `Reason ${error}` });
    });
}

//LOGIN /api/login
app.post("/api/login", callbackOnLogin);
function callbackOnLogin(request, response) {
  const { username, password } = request.body;
  const sqlStatement = "SELECT * FROM users WHERE username=? AND password=?";
  const promise = connection
    .promise()
    .query(sqlStatement, [username, password]);
  promise
    .then(([rows, fields]) => {
      if (rows.length == 1) {
        response.status(200).json({ message: "Uspješno logovani" });
      } else {
        response.status(401).json({
          message: "Neispravna kombinacija korisničkog naloga i lozinke",
        });
      }
    })
    .catch((error) => {
      response.status(500).json({
        message: `Greška ${error}`,
      });
    });
}

const port = 8080;
app.listen(port, () =>
  console.log(`Backend Aplikacija startala na portu ${port}`)
);
