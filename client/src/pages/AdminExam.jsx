import { useEffect, useState } from "react";
import axios from "axios";


export default function AdminExam(){


  const [exams,setExams] = useState([]);


  const [exam,setExam] = useState({

    name:"",
    category:"",
    description:""

  });



  const [editId,setEditId] = useState(null);




  const getExams = async()=>{

    try{


      const response = await axios.get(

        "http://dream-aspirant.onrender.com/api/admin/exam"

      );


      setExams(response.data);



    }catch(error){

      console.log(error);

    }

  };




  useEffect(()=>{

    getExams();

  },[]);







  const handleChange=(e)=>{


    setExam({

      ...exam,

      [e.target.name]:e.target.value

    });


  };







  const handleSubmit=async(e)=>{


    e.preventDefault();


    try{


      const token = localStorage.getItem("token");



      if(editId){



        await axios.put(

          `http://dream-aspirant.onrender.com/api/admin/exam/${editId}`,

          exam,

          {

            headers:{

              Authorization:`Bearer ${token}`

            }

          }

        );


        alert("Exam Updated Successfully");



      }else{



        await axios.post(

          "http://dream-aspirant.onrender.com/api/admin/exam",

          exam,

          {

            headers:{

              Authorization:`Bearer ${token}`

            }

          }

        );


        alert("Exam Added Successfully");


      }





      setExam({

        name:"",
        category:"",
        description:""

      });



      setEditId(null);


      getExams();



    }catch(error){


      console.log(error);

      alert("Operation Failed");


    }


  };








  const editExam=(item)=>{


    setExam({

      name:item.name,

      category:item.category,

      description:item.description

    });



    setEditId(item._id);


  };







  const deleteExam=async(id)=>{


    try{


      const token = localStorage.getItem("token");



      await axios.delete(

        `http://dream-aspirant.onrender.com/api/admin/exam/${id}`,

        {

          headers:{

            Authorization:`Bearer ${token}`

          }

        }

      );



      alert("Exam Deleted Successfully");


      getExams();



    }catch(error){

      console.log(error);

    }


  };







  return (

    <div className="dashboard-main">



      <div className="dashboard-header">


        <h1>
          🏛️ Manage Exams
        </h1>


        <p>
          Add • Edit • Delete Exams
        </p>


      </div>







      <div className="subject-card">



        <form onSubmit={handleSubmit}>


          <input

            type="text"

            name="name"

            placeholder="Exam Name"

            value={exam.name}

            onChange={handleChange}

          />







          <input

            type="text"

            name="category"

            placeholder="Exam Category"

            value={exam.category}

            onChange={handleChange}

          />







          <textarea

            name="description"

            placeholder="Exam Description"

            value={exam.description}

            onChange={handleChange}

          />







          <button className="primary-btn">


            {

            editId

            ?

            "Update Exam"

            :

            "Add Exam"

            }


          </button>



        </form>



      </div>









      <div className="subject-grid">



        {


        exams.map((item)=>(


          <div

          className="subject-card"

          key={item._id}

          >



            <h2>
              🏛️
            </h2>



            <h3>
              {item.name}
            </h3>



            <p>
              {item.category}
            </p>



            <p>
              {item.description}
            </p>







            <button

            className="primary-btn"

            onClick={()=>editExam(item)}

            >

            ✏️ Edit

            </button>







            <button

            className="primary-btn"

            onClick={()=>deleteExam(item._id)}

            >

            🗑️ Delete

            </button>



          </div>


        ))



        }



      </div>



    </div>

  );

}