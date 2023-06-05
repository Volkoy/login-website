const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const authRoute = require("./Routes/AuthRoute");
const User = require("./Models/UserModel");

require("dotenv").config();
const { MONGO_URL, PORT } = process.env;

const app = express();

const createUsers = async () => {
  try {
    const userData = [
      {
        email: "user1@example.com",
        password: "password1",
      },
      {
        email: "user2@example.com",
        password: "password2",
      },
    ];

    for (let i = 0; i < userData.length; i++) {
      const { email, password } = userData[i];
      const find = await User.findOne({ email });
      if (find) {
        console.log("User already exists!");
      } else {
        const user = await User.create({ email, password });

        console.log(`User ${user} created successfully`);
      }
    }
  } catch (error) {
    console.error("Error creating users", error);
  }
};

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    createUsers();
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT + "...");
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded());
app.use("/", authRoute);
