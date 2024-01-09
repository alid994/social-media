import { dataBase } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  const findQuery = "SELECT * FROM users WHERE username = ?";

  dataBase.query(findQuery, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const insertQuery =
      "INSERT INTO users (username,email,password,name,surname) VALUES (?)";
    const userValues = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
      req.body.surname,
    ];
    dataBase.query(insertQuery, [userValues], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data) {
        const response = {
          id: data.insertId,
          username: userValues[0],
          email: userValues[1],
          name: userValues[3],
          surname: userValues[4],
        };
        console.log(response);
        const token = jwt.sign({ id: data.insertId }, "secretkey");
        const { hashedPassword, ...otherValues } = userValues;
        return res
          .cookie("accessToken", token, {
            httpOnly: true,
          })
          .status(200)
          .json(response);
      }
    });
  });
};

export const login = (req, res) => {
  const findQuery = "SELECT * FROM users WHERE username = ?";

  dataBase.query(findQuery, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User doesn't exist!");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPassword) return res.status(400).json("Wrong Password!");

    const token = jwt.sign({ id: data[0].id }, "secretkey");
    const { password, ...otherValues } = data[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(otherValues);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User logged out!");
};
