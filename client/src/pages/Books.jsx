import { useEffect, useState } from "react";
import axios from "axios";


export default function Books(){


  const [materials,setMaterials] = useState([]);



  const getMaterials = async()=>{

    try{


      const response = await axios.get(

        "http://localhost:5000/api/admin/material"

      );


      setMaterials(response.data);



    }catch(error){

      console.log(error);

    }

  };




  useEffect(()=>{

    getMaterials();

  },[]);




  return (

    <div className="dashboard-main">



      <div className="dashboard-header">


        <h1>
          📖 Study Material
        </h1>


        <p>
          Books • Notes • PYQ
        </p>


      </div>





      <div className="subject-grid">


        {

          materials.length > 0 ?


          materials.map((item,index)=>(


            <div

              className="subject-card"

              key={index}

            >


              <h2>

                {

                  item.type === "books"
                  ? "📖"
                  : item.type === "notes"
                  ? "📝"
                  : "📄"

                }

              </h2>



              <h3>

                {item.title}

              </h3>




              <p>

                Subject: {item.subject}

              </p>




              <p>

                Type: {item.type}

              </p>




              <button

                className="primary-btn"

                onClick={()=>window.open(item.fileUrl)}

              >

                Open PDF

              </button>



            </div>


          ))



          :


          <p>
            No Material Available
          </p>


        }



      </div>



    </div>

  );

}