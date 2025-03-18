import dotenv from "dotenv";
dotenv.config({});
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// api
app.get("/", (req, res) => {
  res.send(`Hello World. This is ${process.env.NODE_ENV} mode`);
});

app.listen(PORT, () => {
  console.log(`Server running at port:${PORT}`);
});
