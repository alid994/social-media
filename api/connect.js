import mysql2 from "mysql2";

export const dataBase = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "frontend",
});
