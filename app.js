const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./DB/DB_con");
const api = require("./Routes/api");
const cookieParser = require("cookie-parser");
const cors = require("cors")

app.use(cors())
app.use(cookieParser());

// image upload
const fileUpload = require("express-fileupload");
// tempfiles uploads
app.use(fileUpload({ useTempFiles: true }));
// Get data
app.use(express.json());

dotenv.config({
  path: ".env",
});

connectDB();
// route load
// localhost:3000/api/
app.use("/api", api);


app.listen(process.env.PORT, () =>
  console.log(`server start locatlhost:${process.env.PORT}`)
);
// localhost:3000/api/teacherDisplay/(search this)
