const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");


const connectDB = require("./config/db");


const authRoutes = require("./routes/auth.routes");
const materialRoutes = require("./routes/materialRoutes");
const adminRoutes = require("./routes/admin.routes");
const resultRoutes = require("./routes/result.routes");
const paymentRoutes = require("./routes/payment.routes");



dotenv.config();



const app = express();



// Middleware

app.use(cors());

app.use(express.json());

app.use(
"/uploads",
express.static("uploads")
);


// Database Connection

connectDB();





// Home Route

app.get("/", (req, res)=>{

    res.send("Dream Aspirant Server Running 🚀");

});





// API Routes

app.use(
    "/api/auth",
    authRoutes
);



app.use(
    "/api/material",
    materialRoutes
);

app.use("/api/admin", adminRoutes);
app.use("/api/result", resultRoutes);
app.use("/api/payment", paymentRoutes);


// Server Start

const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=>{

    console.log(
        `Server running on port ${PORT} 🚀`
    );

});