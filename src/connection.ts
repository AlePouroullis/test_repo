import mysql from "mysql";
const dbConfig = {
  host: "marketplace-db.c4gbrxxvvuz9.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "fantasY1!",
  database: "test_schema",
};

const pool = mysql.createPool(dbConfig);

pool.getConnection((err, connection) => {
  if (err) throw err;
});

pool.on("error", (err) => {
  console.log(err.code);
});

export default pool;
