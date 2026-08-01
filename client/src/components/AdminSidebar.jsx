import { useNavigate } from "react-router-dom";


export default function AdminSidebar(){

  const navigate = useNavigate();


  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };


  return (

    <aside className="sidebar">


      <div className="sidebar-logo">

        <h2>
          👑 Dream<span>Aspirant</span>
        </h2>

        <p>
          Admin Panel
        </p>

      </div>



      <div className="sidebar-menu">


        <button onClick={()=>navigate("/admin")}>
          🏠 Dashboard
        </button>


        <button onClick={()=>navigate("/admin/exams")}>
          🏛️ Add Exam
        </button>


        <button onClick={()=>navigate("/admin/subjects")}>
          📚 Add Subject
        </button>


        <button onClick={()=>navigate("/admin/material")}>
          📖 Upload Material
        </button>


        <button onClick={()=>navigate("/admin/users")}>
          👥 Users
        </button>
        
           <button onClick={()=>navigate("/admin/manage-subjects")}>
               📚 Manage Subjects
              </button>
          <button onClick={() => navigate("/admin/results")}>
  📊 Mock Test Results
</button>
            <button onClick={() => navigate("/leaderboard")}>
  🏆 Leaderboard
</button>
        <button onClick={logout}>
          🚪 Logout
        </button>
              
      </div>


    </aside>

  );

}