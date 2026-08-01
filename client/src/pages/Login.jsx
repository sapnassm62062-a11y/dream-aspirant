import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login(){

  const navigate = useNavigate();


  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");



  const handleLogin = async(e)=>{

    e.preventDefault();


    try{

      const res = await fetch(
        "https://dream-aspirant.onrender.com/api/auth/login",
        {
          method:"POST",

          headers:{
            "Content-Type":"application/json"
          },

          body:JSON.stringify({
            email,
            password
          })
        }
      );


      const data = await res.json();



      if(res.ok){

        localStorage.setItem(
          "token",
          data.token
        );


        navigate("/dashboard");

      }
      else{

        alert(
          data.message || "Login Failed"
        );

      }


    }
    catch(error){

      console.log(error);

      alert("Server Error");

    }


  };



  return(

    <div className="auth-page">


      <div className="auth-card">


        <h1 className="auth-logo">

          Dream<span>Aspirant</span>

        </h1>


        <p className="auth-tag">

          Dream. Prepare. Achieve.

        </p>



        <h2>
          Student Login
        </h2>



        <form onSubmit={handleLogin}>


          <input

            className="auth-input"

            type="email"

            placeholder="Enter Email"

            value={email}

            onChange={
              e=>setEmail(e.target.value)
            }

            required

          />



          <input

            className="auth-input"

            type="password"

            placeholder="Enter Password"

            value={password}

            onChange={
              e=>setPassword(e.target.value)
            }

            required

          />



          <button
            className="auth-btn"
            type="submit"
          >

            Login →

          </button>



        </form>



        <p className="auth-bottom">

          Don't have account?

          <span
            onClick={()=>navigate("/signup")}
          >
            Create Account
          </span>

        </p>



      </div>


    </div>

  );

}