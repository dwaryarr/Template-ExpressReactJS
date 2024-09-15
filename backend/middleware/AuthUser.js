import User from "../models/UserModel.js";

export const verifyUser = async (req, res, next) => {
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
  req.userid = user.userid;
  req.role = user.role;
  next();
};

export const adminOnly = async (req, res, next) => {
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
  if (user.role !== "Admin") {
    return res.status(403).json({ message: "User not authorized" });
  }
  next();
};
