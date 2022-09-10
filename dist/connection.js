"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const dbConfig = {
    host: "marketplace-db.c4gbrxxvvuz9.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "fantasY1!",
    database: "test_schema",
};
const pool = mysql_1.default.createPool(dbConfig);
pool.getConnection((err, connection) => {
    if (err)
        throw err;
});
pool.on("error", (err) => {
    console.log(err.code);
});
exports.default = pool;
