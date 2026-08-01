import { useEffect, useState } from "react";
import axios from "axios";


export default function Profile(){


const [user,setUser]=useState({

name:"",
email:"",
phone:""

});




const getProfile=async()=>{


try{


const token=localStorage.getItem("token");


const response=await axios.get(

"http://localhost:5000/api/auth/profile",

{

headers:{

Authorization:`Bearer ${token}`

}

}

);



setUser(response.data);



}catch(error){

console.log(error);

}


};





useEffect(()=>{

getProfile();

},[]);








const handleChange=(e)=>{


setUser({

...user,

[e.target.name]:e.target.value

});


};








const updateProfile=async()=>{


try{


const token=localStorage.getItem("token");


await axios.put(

"http://localhost:5000/api/auth/profile",

{

name:user.name,

phone:user.phone

},

{

headers:{

Authorization:`Bearer ${token}`

}

}

);



alert("Profile Updated Successfully");



}catch(error){


console.log(error);


}


};







const logout=()=>{


localStorage.removeItem("token");

localStorage.removeItem("user");


window.location.href="/login";


};








return(


<div className="dashboard-main">



<div className="dashboard-header">


<h1>
👤 My Profile
</h1>


<p>
Manage your account details
</p>


</div>






<div className="subject-card">



<input

type="text"

name="name"

value={user.name}

onChange={handleChange}

placeholder="Name"

/>





<input

type="email"

value={user.email}

disabled

/>



<input

type="text"

name="phone"

value={user.phone}

onChange={handleChange}

placeholder="Phone"

/>






<button

className="primary-btn"

onClick={updateProfile}

>

Update Profile

</button>






<button

className="primary-btn"

onClick={logout}

>

Logout

</button>




</div>



</div>


);


}