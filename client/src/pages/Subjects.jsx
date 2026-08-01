import {useEffect,useState} from "react";
import axios from "axios";


export default function Subjects(){


const [subjects,setSubjects]=useState([]);




useEffect(()=>{


axios.get(
"http://localhost:5000/api/admin/subject"
)

.then(res=>{

setSubjects(res.data);

})


.catch(err=>{

console.log(err);

});


},[]);






return(


<div className="dashboard-main">


<h1>
📚 Subjects
</h1>




<div className="subject-grid">


{

subjects.map((item)=>(


<div

className="subject-card"

key={item._id}

>


<h2>
📘
</h2>


<h3>
{item.name}
</h3>


<p>
{item.description}
</p>


</div>


))


}



</div>



</div>


);


}