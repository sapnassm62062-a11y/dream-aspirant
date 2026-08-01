import { useEffect, useState } from "react";
import axios from "axios";


export default function Exams(){


const [exams,setExams]=useState([]);




const getExams=async()=>{


try{


const response = await axios.get(

"http://dream-aspirant.onrender.com/api/admin/exam"

);


setExams(response.data);



}catch(error){

console.log(error);

}



};





useEffect(()=>{

getExams();

},[]);





return(

<div className="dashboard-main">


<h1>
🏛️ Government Exams
</h1>




<div className="subject-grid">


{


exams.map((exam)=>(


<div

className="subject-card"

key={exam._id}

>


<h2>
🏛️
</h2>


<h3>
{exam.name}
</h3>



<p>
{exam.category}
</p>



<p>
{exam.description}
</p>



<button className="primary-btn">

View Details

</button>



</div>


))


}



</div>



</div>


);


}