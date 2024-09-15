import { Sequelize } from "sequelize";

const db = new Sequelize("expreact", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
