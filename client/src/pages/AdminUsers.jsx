import { useEffect, useState } from "react";
import axios from "axios";


export default function AdminUsers(){


  const [users,setUsers] = useState([]);



  const getUsers = async()=>{

    try{

      const response = await axios.get(
        "http://dream-aspirant.onrender.com/api/admin/users"
      );


      setUsers(response.data);


    }catch(error){

      console.log(error);

    }

  };



  useEffect(()=>{

    getUsers();

  },[]);




  return (

    <div className="dashboard-main">


      <div className="dashboard-header">

        <h1>
          👥 Manage Users
        </h1>

        <p>
          View registered students
        </p>

      </div>




      <div className="subject-grid">


        {
          users.map((user,index)=>(


            <div 
              className="subject-card"
              key={index}
            >

              <h3>
                🎓 {user.name}
              </h3>


              <p>
                📧 {user.email}
              </p>


              <p>
                📱 {user.phone}
              </p>


              <p>
                Role: {user.role}
              </p>


            </div>


          ))
        }


      </div>


    </div>

  );

}