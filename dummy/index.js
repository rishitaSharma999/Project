const cors = require("cors");
const express= require("express");
const app = express();


const userRoutes = require("../dummy/routes/User");
const contactRoutes = require("../dummy/routes/Contact");


const database = require("../dummy/config/database");
const cookieParser = require("cookie-parser");

const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;


database.dbConnect();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:"http://localhost:5175",
        credentials:true
    })
)




app.use("/api/v1/auth",userRoutes);
app.use("/api/v1",contactRoutes);


app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"your server is up and running"
    });
});


app.listen(PORT,()=>{
    console.log("App is running at port 4000")
})










