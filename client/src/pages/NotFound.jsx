import { useNavigate } from "react-router-dom";

export default function NotFound() {

  const navigate = useNavigate();

  return (

    <div
      style={{
        height:"100vh",
        background:"#f4f6f9",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
      }}
    >

      <h1
        style={{
          fontSize:"80px",
          color:"#1565C0",
          margin:0
        }}
      >
        404
      </h1>


      <h2>
        Page Not Found ❌
      </h2>


      <p>
        The page you are looking for does not exist.
      </p>


      <button
        onClick={() => navigate("/dashboard")}
        style={{
          background:"#1565C0",
          color:"white",
          border:"none",
          padding:"12px 25px",
          borderRadius:"5px",
          cursor:"pointer"
        }}
      >
        Go To Dashboard
      </button>


    </div>

  );
}