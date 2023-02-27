require("express-async-errors");
require("dotenv").config();

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDb = require("./db/dbConnect");
const commentRouter = require("./routes/commentRoutes");
const replyCommentRouter = require("./routes/replyRoutes");
const express = require("express");
const app = express();

//packages
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/wedding/comment", commentRouter);
app.use("/wedding/replyComment", replyCommentRouter);
app.get("/", (req, res) => {
  res.send("hello");
});

const PORT = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log("server is listening on port :" + PORT);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
