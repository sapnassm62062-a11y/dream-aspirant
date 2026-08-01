import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Signup(){

  const navigate = useNavigate();


  const [formData,setFormData] = useState({

    name:"",
    email:"",
    phone:"",
    password:""

  });



  const handleChange=(e)=>{

    setFormData({

      ...formData,

      [e.target.name]:e.target.value

    });

  };



  const handleSignup=async(e)=>{

    e.preventDefault();


    try{


      const res = await fetch(

        "http://localhost:5000/api/auth/register",

        {

          method:"POST",

          headers:{

            "Content-Type":"application/json"

          },

          body:JSON.stringify(formData)

        }

      );



      const data = await res.json();



      if(res.ok){

        alert("Account Created Successfully ✅");

        navigate("/login");

      }

      else{

        alert(
          data.message || "Signup Failed"
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

          Start Your Preparation Journey

        </p>



        <h2>
          Create Account
        </h2>



        <form onSubmit={handleSignup}>


          <input

            className="auth-input"

            name="name"

            placeholder="Full Name"

            value={formData.name}

            onChange={handleChange}

            required

          />



          <input

            className="auth-input"

            name="email"

            type="email"

            placeholder="Email Address"

            value={formData.email}

            onChange={handleChange}

            required

          />



          <input

            className="auth-input"

            name="phone"

            placeholder="Phone Number"

            value={formData.phone}

            onChange={handleChange}

            required

          />



          <input

            className="auth-input"

            name="password"

            type="password"

            placeholder="Password"

            value={formData.password}

            onChange={handleChange}

            required

          />



          <button
            className="auth-btn"
            type="submit"
          >

            Create Account →

          </button>



        </form>




        <p className="auth-bottom">

          Already have account?

          <span
            onClick={()=>navigate("/login")}
          >

            Login

          </span>


        </p>



      </div>


    </div>

  );

}