const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");
const textRoute = require("./Routes/textRoute");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/texts", textRoute);

//-------------------Deployment----------------------------

const __dirnam1 = path.resolve();
if (process.env.NODE_ENV === "produciton") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirnam1, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API running successfully");
  });
}

//---------------------------------------------------------

//CRUD
app.get("/", (req, res) => {
  res.send("welcome to chat app APIs...");
});

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
  console.log(`Server running on port: ${port}`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established"))
  .catch((error) => console.log("MongoDB connection failed: ", error.message));
