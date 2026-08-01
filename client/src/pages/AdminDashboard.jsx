import { useEffect, useState } from "react";
import axios from "axios";

import AdminSidebar from "../components/AdminSidebar";


export default function AdminDashboard(){


  const [stats,setStats] = useState({

    students:0,
    exams:0,
    subjects:0,
    materials:0

  });


  const [users,setUsers] = useState([]);




  const getStats = async()=>{


    try{


      const token = localStorage.getItem("token");


      const response = await axios.get(

        "http://dream-aspirant.onrender.com/api/admin/stats",

        {

          headers:{

            Authorization:`Bearer ${token}`

          }

        }

      );


      setStats(response.data);



    }catch(error){

      console.log(error);

    }


  };






  const getUsers = async()=>{


    try{


      const token = localStorage.getItem("token");


      const response = await axios.get(

        "http://dream-aspirant.onrender.com/api/admin/users",

        {

          headers:{

            Authorization:`Bearer ${token}`

          }

        }

      );


      setUsers(response.data);



    }catch(error){

      console.log(error);

    }


  };







  useEffect(()=>{


    getStats();

    getUsers();


  },[]);






  return (

    <div className="dashboard-layout">


      <AdminSidebar />



      <main className="dashboard-main">



        <div className="dashboard-header">


          <h1>
            👑 Admin Dashboard
          </h1>


          <p>
            Manage Dream Aspirant Platform
          </p>


        </div>







        <div className="subject-grid">



          <div className="subject-card">

            <h2>
              👨‍🎓
            </h2>

            <h3>
              Students
            </h3>

            <p>
              {stats.students}
            </p>

          </div>







          <div className="subject-card">

            <h2>
              🏛️
            </h2>

            <h3>
              Exams
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
              Subjects
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
              Materials
            </h3>

            <p>
              {stats.materials}
            </p>

          </div>







          <div className="subject-card">

            <h2>
              👥
            </h2>

            <h3>
              Total Users
            </h3>

            <p>
              {users.length}
            </p>

          </div>




        </div>









        <div className="dashboard-header">


          <h2>
            👨‍🎓 Registered Users
          </h2>


        </div>







        <div className="subject-grid">



          {


          users.map((user)=>(


            <div

            className="subject-card"

            key={user._id}

            >



              <h3>
                {user.name}
              </h3>


              <p>
                📧 {user.email}
              </p>


              <p>
                📱 {user.phone}
              </p>


              <p>
                Role : {user.role}
              </p>



            </div>



          ))



          }



        </div>






      </main>



    </div>

  );

}