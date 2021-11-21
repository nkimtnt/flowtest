const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const petRouter = require("./routes/pet");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/pet", petRouter);

const port = 8080;
let server = app.listen(port, () => {
  console.log(`🚀 Server is starting on ${port}`);
});

module.exports = server;
