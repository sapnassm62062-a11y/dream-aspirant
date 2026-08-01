import { useNavigate } from "react-router-dom";

export default function ExamPreparation() {

  const navigate = useNavigate();


  const exams = [
    {
      name: "BPSC",
      desc: "Bihar Public Service Commission"
    },
    {
      name: "Bihar Police",
      desc: "Police Constable & SI Preparation"
    },
    {
      name: "CTET",
      desc: "Central Teacher Eligibility Test"
    },
    {
      name: "SSC CGL",
      desc: "Staff Selection Commission"
    }
  ];


  return (

    <div
      style={{
        minHeight:"100vh",
        background:"#f4f6f9",
        padding:"30px"
      }}
    >

      <button
        onClick={() => navigate("/dashboard")}
        style={btnStyle}
      >
        ← Back
      </button>


      <h1>
        📚 Bihar Exam Preparation
      </h1>


      <div
        style={{
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(250px,1fr))",
          gap:"20px"
        }}
      >

        {
          exams.map((exam,index)=>(

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
                {exam.name}
              </h2>

              <p>
                {exam.desc}
              </p>


              <button
                onClick={() =>
                  navigate("/exam-detail", {
                    state: exam
                  })
                }
                style={btnStyle}
              >
                Start Preparation
              </button>


            </div>

          ))
        }

      </div>

    </div>

  );
}


const btnStyle = {
  background:"#1565C0",
  color:"white",
  border:"none",
  padding:"10px 20px",
  borderRadius:"5px",
  cursor:"pointer"
};