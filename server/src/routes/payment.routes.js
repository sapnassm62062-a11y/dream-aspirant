const express = require("express");
const router = express.Router();

const Razorpay = require("razorpay");
const crypto = require("crypto");

const authMiddleware = require("../middleware/auth.middleware");
const User = require("../models/user.model");



// Razorpay Instance

let razorpay;


if (
    process.env.RAZORPAY_KEY_ID &&
    process.env.RAZORPAY_KEY_SECRET
) {

    razorpay = new Razorpay({

        key_id: process.env.RAZORPAY_KEY_ID,

        key_secret: process.env.RAZORPAY_KEY_SECRET

    });

}



// Create Order

router.post(
    "/create-order",
    authMiddleware,
    async (req, res) => {

        try {


            if (!razorpay) {

                return res.status(500).json({

                    message:
                    "Razorpay keys missing in .env"

                });

            }



            const { amount, type } = req.body;



            const options = {

                amount: amount * 100,

                currency: "INR",

                receipt:
                "dream_aspirant_" + Date.now(),


                notes: {

                    type: type

                }

            };



            const order =
            await razorpay.orders.create(options);



            res.json({

                order

            });



        }
        catch(error){


            res.status(500).json({

                message:error.message

            });


        }


    }
);








// Verify Payment

router.post(
    "/verify",
    authMiddleware,
    async(req,res)=>{


        try{


            const {

                razorpay_order_id,

                razorpay_payment_id,

                razorpay_signature,

                type


            } = req.body;





            const body =
            razorpay_order_id +
            "|" +
            razorpay_payment_id;






            const expectedSignature =
            crypto
            .createHmac(
                "sha256",
                process.env.RAZORPAY_KEY_SECRET
            )
            .update(body.toString())
            .digest("hex");







            if(
                expectedSignature !== razorpay_signature
            ){

                return res.status(400).json({

                    message:
                    "Payment verification failed"

                });

            }







            const user =
            await User.findById(req.user.id);






            if(type === "pyq"){

                user.pyqAccess = true;

            }



            if(type === "interview"){

                user.interviewAccess = true;

            }







            await user.save();






            res.json({

                message:
                "Payment successful Access unlocked"

            });







        }
        catch(error){


            res.status(500).json({

                message:error.message

            });


        }


    }
);






module.exports = router;