import { useNavigate } from "react-router-dom";


export default function Sidebar(){

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
          Dream<span>Aspirant</span>
        </h2>

      </div>



      <div className="sidebar-menu">


        <button onClick={()=>navigate("/dashboard")}>
          🏠 Dashboard
        </button>



        <button onClick={()=>navigate("/subjects")}>
          📚 Subjects
        </button>



        <button onClick={()=>navigate("/exams")}>
          🏛️ Government Exams
        </button>



        <button onClick={()=>navigate("/pyq")}>
          📝 PYQ
        </button>



        <button onClick={()=>navigate("/books")}>
          📖 Books
        </button>



        <button onClick={()=>navigate("/mock-test")}>
          📊 Mock Test
        </button>



        <button onClick={()=>navigate("/interview")}>
          🤖 AI Interview
        </button>



        <button onClick={()=>navigate("/profile")}>
          👤 Profile
        </button>
        <button onClick={() => navigate("/mock-test")}>
  📝 Mock Test
</button>
          <button onClick={() => navigate("/my-results")}>
  📊 My Results
</button>
         <button onClick={() => navigate("/payment")}>
  💳 Premium
</button>
        <button 
          className="logout-btn"
          onClick={logout}
        >
          🚪 Logout
        </button>



      </div>


    </aside>

  );

}