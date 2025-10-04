const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

// configuring DB from env Config.

const DB = process.env.TEST_DB



mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((con) => {
        console.log("DB connected successfully");
    })
    .catch((err) => {
        console.log("error connecting DB", err);
    });

app.listen(Number(process.env.PORT), () => {
    console.log("server started at nbb", process.env.PORT);
});