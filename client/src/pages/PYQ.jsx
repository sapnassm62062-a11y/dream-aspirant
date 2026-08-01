import { useEffect, useState } from "react";
import axios from "axios";


export default function PYQ(){


const [access,setAccess] = useState(false);

const [loading,setLoading] = useState(true);



useEffect(()=>{


const checkAccess = async()=>{


try{


const token = localStorage.getItem("token");



const response = await axios.get(

"http://dream-aspirant.onrender.com/api/auth/access",

{

headers:{

Authorization:`Bearer ${token}`

}

}

);



setAccess(response.data.pyqAccess);



}catch(error){


console.log(error);


}



setLoading(false);



};



checkAccess();



},[]);







if(loading){


return(

<div className="dashboard-main">

<h2>
Loading...
</h2>

</div>

);


}








if(!access){


return(

<div className="dashboard-main">


<div className="dashboard-header">


<h1>
🔒 PYQ Locked
</h1>


<p>
Unlock Previous Year Questions for ₹1
</p>


</div>




<div className="subject-card">


<h2>
📚
</h2>


<h3>
Premium PYQ Access
</h3>


<p>
Get previous year questions of different government exams.
</p>


<button className="primary-btn">


Unlock Now ₹1


</button>


</div>



</div>

);


}









return(


<div className="dashboard-main">



<div className="dashboard-header">


<h1>
📚 Previous Year Questions
</h1>


<p>
Practice important exam questions
</p>


</div>







<div className="subject-grid">



<div className="subject-card">


<h2>
🏛️
</h2>


<h3>
SSC CGL PYQ
</h3>


<p>
Previous year questions with solutions.
</p>


<button className="primary-btn">

Start Practice

</button>


</div>







<div className="subject-card">


<h2>
👮
</h2>


<h3>
Bihar Police PYQ
</h3>


<p>
Police exam previous papers.
</p>


<button className="primary-btn">

Start Practice

</button>


</div>







<div className="subject-card">


<h2>
📖
</h2>


<h3>
BPSC PYQ
</h3>


<p>
Bihar Public Service Commission papers.
</p>


<button className="primary-btn">

Start Practice

</button>


</div>





</div>



</div>


);


}