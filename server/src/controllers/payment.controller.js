const Razorpay = require("razorpay");


const razorpay = new Razorpay({

    key_id: process.env.RAZORPAY_KEY_ID,

    key_secret: process.env.RAZORPAY_KEY_SECRET

});


// Create Order

const createOrder = async (req, res) => {

    try {

        const options = {

            amount: 1000, // ₹10 (amount paise me hota hai)

            currency: "INR",

            receipt: "dream_aspirant_payment"

        };


        const order = await razorpay.orders.create(options);


        res.status(200).json({

            success: true,

            order

        });


    } catch (error) {


        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



module.exports = {
    createOrder
};