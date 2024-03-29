const express = require("express");
const app = express();
const dotenv = require("dotenv");

const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
const cors = require('cors');



dotenv.config(); 


app.use(cors());
app.use(express.json());
app.use("/images",express.static(path.join(__dirname,"/images")))

// mongoose.connect(process.env.MONGO_URL).then(console.log("Connected to monogodb")).catch((err) => console.log(err));

async function startServer() {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("Connected to MongoDB");
      app.listen(5000, () => {
        console.log("Backend is running");
      });
    } catch (error) {
      console.error("MongoDB connection error:", error);
    }
  }
  
  startServer();

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"images")
    },
    filename:(req,file,cb) => {
        cb(null,req.body.name);
    },
});


const upload = multer({storage:storage});

app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded");
});

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/categories",categoryRoute);




// app.listen("5000",() => {
//     console.log("Backend is running");
// });


module.exports = app;