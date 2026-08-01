import { useState } from "react";
import axios from "axios";


export default function Payment(){


const [loading,setLoading] = useState(false);



const token = localStorage.getItem("token");




const makePayment = async(type)=>{


try{


setLoading(true);



let amount = 0;


if(type==="pyq"){

amount = 1;

}


if(type==="interview"){

amount = 10;

}





// Create Order

const orderResponse = await axios.post(

"http://localhost:5000/api/payment/create-order",

{

amount: amount,

type:type

},

{

headers:{

Authorization:`Bearer ${token}`

}

}

);




const options = {


key:"rzp_test_TI8VmOXGImYZnc",


amount:orderResponse.data.order.amount,


currency:"INR",


name:"Dream Aspirant",


description:

type==="pyq"

?

"PYQ Access"

:

"AI Interview Access",




order_id:

orderResponse.data.order.id,




handler:async function(response){



await axios.post(

"http://localhost:5000/api/payment/verify",

{


razorpay_order_id:

response.razorpay_order_id,


razorpay_payment_id:

response.razorpay_payment_id,


razorpay_signature:

response.razorpay_signature,


type:type


},


{

headers:{

Authorization:`Bearer ${token}`

}

}


);



alert(

"Payment Successful 🎉 Access Unlocked"

);



},




prefill:{


name:"Student",


email:"student@gmail.com"


},



theme:{


color:"#2563eb"


}



};





const razor = new window.Razorpay(options);


razor.open();



}catch(error){


console.log(error);


alert("Payment Failed");


}



setLoading(false);


};








return(


<div className="dashboard-main">



<div className="dashboard-header">


<h1>
💳 Premium Access
</h1>


<p>
Unlock PYQ and AI Interview Features
</p>


</div>








<div className="subject-grid">





<div className="subject-card">


<h2>
📚
</h2>


<h3>
Previous Year Questions
</h3>


<p>
Unlock PYQ Collection
</p>


<h2>
₹1
</h2>



<button

className="primary-btn"

disabled={loading}

onClick={()=>makePayment("pyq")}

>


Unlock PYQ


</button>



</div>









<div className="subject-card">


<h2>
🤖
</h2>


<h3>
AI Interview
</h3>


<p>
Practice AI Based Interview
</p>


<h2>
₹10
</h2>




<button

className="primary-btn"

disabled={loading}

onClick={()=>makePayment("interview")}

>


Unlock AI Interview


</button>



</div>






</div>



</div>


);


}