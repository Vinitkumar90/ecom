import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

//app config
const app = express();
const port = process.env.PORT || 4000
connectDb();
connectCloudinary();


//middleware
app.use(express.json())
app.use(cors());

//api end points

app.get("/",(req,res)=>{
    res.send("API working")
})


app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})