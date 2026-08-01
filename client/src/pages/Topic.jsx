import { useParams, useNavigate } from "react-router-dom";


export default function Topic(){

  const { name } = useParams();

  const navigate = useNavigate();



  return(

    <div className="dashboard-page">


      <main className="dashboard-main">


        <button

          className="secondary-btn"

          onClick={()=>navigate(-1)}

        >

          ← Back

        </button>




        <div className="subject-header">


          <h1>

            📘 {name}

          </h1>


          <p>

            Complete preparation material for {name}

          </p>


        </div>






        <div className="service-grid">



          <div className="service-card">


            <h3>
              📚 Notes
            </h3>


            <p>
              Complete topic notes and concepts.
            </p>


            <button

              className="primary-btn"

              onClick={()=>navigate(`/material/${name}/notes`)}

            >

              Open Notes

            </button>


          </div>







          <div className="service-card">


            <h3>
              📖 Books
            </h3>


            <p>
              Recommended preparation books.
            </p>


            <button

              className="primary-btn"

              onClick={()=>navigate(`/material/${name}/books`)}

            >

              View Books

            </button>


          </div>







          <div className="service-card">


            <h3>
              📝 PYQ
            </h3>


            <p>
              Previous year exam questions.
            </p>


            <button

              className="primary-btn"

              onClick={()=>navigate(`/material/${name}/pyq`)}

            >

              Practice PYQ

            </button>


          </div>







          <div className="service-card">


            <h3>
              📊 Mock Test
            </h3>


            <p>
              Test your preparation.
            </p>


            <button

              className="primary-btn"

              onClick={()=>navigate(`/material/${name}/test`)}

            >

              Start Test

            </button>


          </div>




        </div>



      </main>


    </div>

  );

}