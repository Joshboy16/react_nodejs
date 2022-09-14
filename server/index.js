import express from "express";
const app = express();
import cors from "cors";
import { Users } from "./users.js";

const PORT = 5000;

app.use(cors());

app.get("/", (req, res) => {

  res.json(Users);
});

app.listen(PORT, () => {
  console.log("Server is running");
});
