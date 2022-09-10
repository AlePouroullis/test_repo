import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./connection";
const app: Application = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response) => {
  res.send("TS App is Running");
});
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});

app.get("/name", async (req, res) => {
  console.log("doing something at name route");
  const data = db.query("SELECT * FROM tblTest", (err, rows, fields) => {
    if (err) throw err;
    res.send(rows[0]);
  });
});
