const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");


// Load environment variables
dotenv.config();


const app = express();


// Middleware
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
);


app.use(express.json());



// Routes

const authRoutes = require("./routes/auth.routes");

const paymentRoutes = require("./routes/payment.routes");



// API Routes

app.use(
    "/api/auth",
    authRoutes
);


app.use(
    "/api/payment",
    paymentRoutes
);



// Test API

app.get("/", (req,res)=>{

    res.json({
        message:"Dream Aspirant Backend Running 🚀"
    });

});



// Error Handler

app.use((err,req,res,next)=>{

    console.log(err);

    res.status(500).json({

        message:"Server Error"

    });

});



module.exports = app;