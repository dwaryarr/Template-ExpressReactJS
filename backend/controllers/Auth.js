import User from "../models/UserModel.js";
import argon2 from "argon2";

export const Login = async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!user) return res.status(404).json({ message: "User not found" });
  const match = await argon2.verify(user.password, req.body.password);
  if (!match) return res.status(400).json({ message: "Wrong Password" });
  req.session.userid = user.userid;
  res
    .status(200)
    .json({ message: "Login success", userid: user.userid, email: user.email });
};

export const Me = async (req, res) => {
  if (!req.session.userid) {
    return res.status(401).json({ message: "User not logged in" });
  }
  const user = await User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      userid: req.session.userid,
    },
  });
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json(user);
};

export const Logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ message: err.message });
    // res.clearCookie("sid");
    res.status(200).json({ message: "Logout success" });
  });
};
