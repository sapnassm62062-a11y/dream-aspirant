import { useNavigate, useLocation } from "react-router-dom";

export default function ImportantQuestions() {

  const navigate = useNavigate();
  const location = useLocation();

  const examName = location.state?.name || "All Exams";


  const questionData = [

    {
      exam: "BPSC",
      questions: [
        "Who is known as the Father of the Indian Constitution?",
        "When was the Constitution of India adopted?",
        "Which river is known as the sorrow of Bihar?",
        "Explain the history of Bihar.",
        "What are the important articles of the Indian Constitution?"
      ]
    },


    {
      exam: "Bihar Police",
      questions: [
        "What are the Fundamental Rights of India?",
        "Who appoints the Governor of a state?",
        "What is the role of Bihar Police?",
        "Important Bihar GK questions.",
        "Important Current Affairs questions."
      ]
    },


    {
      exam: "CTET",
      questions: [
        "What is Child Development?",
        "Explain learning theories.",
        "What is inclusive education?",
        "Important pedagogy questions.",
        "Teaching methods and techniques."
      ]
    },


    {
      exam: "SSC CGL",
      questions: [
        "Important questions of Quantitative Aptitude.",
        "Important Reasoning questions.",
        "English Grammar important questions.",
        "General Awareness questions.",
        "Current Affairs questions."
      ]
    }

  ];


  const filteredQuestions =
    examName === "All Exams"
      ? questionData
      : questionData.filter(
          (item) => item.exam === examName
        );


  return (

    <div
      style={{
        minHeight:"100vh",
        background:"#f4f6f9",
        padding:"30px"
      }}
    >

      <button
        onClick={() => navigate(-1)}
        style={buttonStyle}
      >
        ← Back
      </button>


      <h1 style={{marginTop:"25px"}}>
        ⭐ {examName} Important Questions
      </h1>


      <p>
        Practice important questions for exam preparation.
      </p>



      <div
        style={{
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(300px,1fr))",
          gap:"20px",
          marginTop:"30px"
        }}
      >

        {
          filteredQuestions.map((item,index)=>(

            <div
              key={index}
              style={{
                background:"white",
                padding:"25px",
                borderRadius:"12px",
                boxShadow:"0 5px 15px rgba(0,0,0,.1)"
              }}
            >

              <h2>
                🎯 {item.exam}
              </h2>


              <ol>

                {
                  item.questions.map((q,i)=>(

                    <li
                      key={i}
                      style={{
                        marginBottom:"10px"
                      }}
                    >
                      {q}
                    </li>

                  ))
                }

              </ol>


              <button
                onClick={() =>
                  alert(
                    `${item.exam} Practice Test Coming Soon`
                  )
                }
                style={buttonStyle}
              >
                Start Practice
              </button>


            </div>

          ))
        }


      </div>


    </div>

  );
}


const buttonStyle = {

  background:"#1565C0",
  color:"white",
  border:"none",
  padding:"10px 20px",
  borderRadius:"5px",
  cursor:"pointer"

};