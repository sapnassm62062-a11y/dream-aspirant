import { useParams, useNavigate } from "react-router-dom";


export default function ExamDetail(){


  const { name } = useParams();

  const navigate = useNavigate();



  const examData = {


    "UPSC IAS / IPS":{

      icon:"🏛️",

      description:
      "India's highest civil services examination.",

      syllabus:[
        "History",
        "Geography",
        "Indian Polity",
        "Economics",
        "Current Affairs",
        "Science & Technology"
      ]

    },



    "BPSC":{

      icon:"🏛️",

      description:
      "Bihar Public Service Commission preparation.",

      syllabus:[
        "Bihar GK",
        "History",
        "Geography",
        "Polity",
        "Current Affairs"
      ]

    },



    "Bihar Police":{

      icon:"👮",

      description:
      "Police recruitment exam preparation.",

      syllabus:[
        "General Knowledge",
        "Reasoning",
        "Mathematics",
        "Hindi",
        "Current Affairs"
      ]

    },



    "SSC CGL":{

      icon:"📝",

      description:
      "Staff Selection Commission exam preparation.",

      syllabus:[
        "Quantitative Aptitude",
        "Reasoning",
        "English",
        "General Awareness"
      ]

    },



    "CTET":{

      icon:"🎓",

      description:
      "Teacher eligibility exam preparation.",

      syllabus:[
        "Child Development",
        "Teaching Methodology",
        "Mathematics",
        "EVS"
      ]

    }


  };



  const exam = examData[name] || {

    icon:"📚",

    description:
    "Complete exam preparation.",

    syllabus:[
      "General Awareness",
      "Reasoning",
      "Practice Questions"
    ]

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

            {exam.icon} {name}

          </h1>


          <p>

            {exam.description}

          </p>


        </div>





        <div className="service-grid">



          <div className="service-card">

            <h3>
              📚 Syllabus
            </h3>


            {
              exam.syllabus.map((item,index)=>(

                <p key={index}>
                  ✅ {item}
                </p>

              ))
            }


          </div>





          <div className="service-card">


            <h3>
              📝 Previous Year Papers
            </h3>


            <p>
              Practice previous year questions.
            </p>


            <button

              className="primary-btn"

              onClick={()=>
                navigate(`/exam-material/${name}/pyq`)
              }

            >

              Open PYQ

            </button>


          </div>







          <div className="service-card">


            <h3>
              📖 Books
            </h3>


            <p>
              Best books for {name}.
            </p>


            <button

              className="primary-btn"

              onClick={()=>
                navigate(`/exam-material/${name}/books`)
              }

            >

              View Books

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

              onClick={()=>
                navigate(`/exam-material/${name}/test`)
              }

            >

              Start Test

            </button>


          </div>




        </div>



      </main>


    </div>


  );

}