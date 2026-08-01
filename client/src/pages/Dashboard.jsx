import { useEffect, useState } from "react";
import axios from "axios";


export default function Dashboard(){


const [profile,setProfile]=useState({});


const [stats,setStats]=useState({

exams:0,

subjects:0,

materials:0

});





useEffect(()=>{


const loadData=async()=>{


try{


const token=localStorage.getItem("token");



const user=await axios.get(

"http://dream-aspirant.onrender.com/api/auth/profile",

{

headers:{

Authorization:`Bearer ${token}`

}

}

);



setProfile(user.data);





const exam=await axios.get(

"http://dream-aspirant.onrender.com/api/admin/exam"

);


const subject=await axios.get(

"http://dream-aspirant.onrender.com/api/admin/subject"

);



const material=await axios.get(

"http://dream-aspirant.onrender.com/api/admin/material"

);





setStats({

exams:exam.data.length,

subjects:subject.data.length,

materials:material.data.length

});





}catch(error){


console.log(error);


}


};




loadData();



},[]);







return(


<div className="dashboard-main">



<div className="dashboard-header">


<h1>

Welcome, {profile.name || "Student"} 👋

</h1>


<p>

Dream Aspirant - Prepare • Practice • Achieve

</p>


</div>








<div className="subject-grid">





<div className="subject-card">


<h2>
👤
</h2>


<h3>
Profile
</h3>


<p>
Name: {profile.name}
</p>


<p>
Email: {profile.email}
</p>


</div>







<div className="subject-card">


<h2>
🏛️
</h2>


<h3>
Total Exams
</h3>


<p>

{stats.exams}

</p>


</div>







<div className="subject-card">


<h2>
📚
</h2>


<h3>
Total Subjects
</h3>


<p>

{stats.subjects}

</p>


</div>







<div className="subject-card">


<h2>
📖
</h2>


<h3>
Study Material
</h3>


<p>

{stats.materials}

</p>


</div>






</div>



</div>


);


}