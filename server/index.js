import express from "express";
const app = express();
import cors from "cors";
import { Users } from "./users.js";

const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", async (req, res) => {
  
  const {q} = req.query

  let keys = ["first_name", "last_name", "email"];

  

  const func = (data) => {
    return data.filter((item) => {
keys.some((key) => item[key]
      );
    });
  };

    let result = func(Users)
  
  res.json(result);
});

app.listen(port, () => {
  console.log("Server is running");
});
