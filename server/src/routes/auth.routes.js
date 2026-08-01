const express = require("express");
const router = express.Router();


const {
  signup,
  login,
  getProfile,
  updateProfile,
  changePassword,
  forgotPassword,
  verifyOTP,
  resetPassword,
} = require("../controllers/auth.controller");



const authMiddleware = require("../middleware/auth.middleware");




// Auth

router.post("/signup", signup);

router.post("/login", login);





// Profile

router.get(
"/profile",
authMiddleware,
getProfile
);



router.put(
"/profile",
authMiddleware,
updateProfile
);



router.put(
"/change-password",
authMiddleware,
changePassword
);




// Forgot Password

router.post(
"/forgot-password",
forgotPassword
);



router.post(
"/verify-otp",
verifyOTP
);



router.post(
"/reset-password",
resetPassword
);

// CHECK PREMIUM ACCESS

router.get(
"/access",
authMiddleware,
async(req,res)=>{


try{


const User = require("../models/user.model");


const user = await User.findById(req.user.id)
.select("pyqAccess interviewAccess");



res.json(user);



}catch(error){


res.status(500).json({

message:error.message

});


}


});



module.exports = router;