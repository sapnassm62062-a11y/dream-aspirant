import { useParams, useNavigate } from "react-router-dom";


export default function ExamMaterial(){

  const { exam, type } = useParams();

  const navigate = useNavigate();



  const title = {

    pyq:"📝 Previous Year Papers",

    books:"📖 Recommended Books",

    test:"📊 Mock Test"

  };



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

            {title[type]}

          </h1>


          <p>

            {exam} preparation material

          </p>


        </div>





        <div className="service-grid">


          <div className="service-card">


            <h3>
              {exam}
            </h3>


            <p>

              Complete {type} for exam preparation.

            </p>



            <button className="primary-btn">

              Open

            </button>


          </div>



        </div>



      </main>


    </div>

  );

}