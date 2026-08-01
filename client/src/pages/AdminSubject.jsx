import { useEffect, useState } from "react";
import axios from "axios";


export default function AdminSubject(){


  const [subjects,setSubjects] = useState([]);


  const [subject,setSubject] = useState({

    name:"",
    description:""

  });



  const [editId,setEditId] = useState(null);





  const getSubjects = async()=>{


    try{


      const response = await axios.get(

        "http://localhost:5000/api/admin/subject"

      );


      setSubjects(response.data);



    }catch(error){

      console.log(error);

    }


  };





  useEffect(()=>{

    getSubjects();

  },[]);






  const handleChange=(e)=>{


    setSubject({

      ...subject,

      [e.target.name]:e.target.value

    });


  };







  const handleSubmit=async(e)=>{


    e.preventDefault();


    try{


      const token = localStorage.getItem("token");



      if(editId){


        await axios.put(

          `http://localhost:5000/api/admin/subject/${editId}`,

          subject,

          {
            headers:{
              Authorization:`Bearer ${token}`
            }
          }

        );


        alert("Subject Updated Successfully");



      }else{


        await axios.post(

          "http://localhost:5000/api/admin/subject",

          subject,

          {
            headers:{
              Authorization:`Bearer ${token}`
            }
          }

        );


        alert("Subject Added Successfully");


      }





      setSubject({

        name:"",
        description:""

      });


      setEditId(null);


      getSubjects();



    }catch(error){


      console.log(error);

      alert("Operation Failed");


    }


  };







  const editSubject=(item)=>{


    setSubject({

      name:item.name,

      description:item.description

    });


    setEditId(item._id);


  };







  const deleteSubject=async(id)=>{


    try{


      const token = localStorage.getItem("token");



      await axios.delete(

        `http://localhost:5000/api/admin/subject/${id}`,

        {

          headers:{
            Authorization:`Bearer ${token}`
          }

        }

      );



      alert("Subject Deleted Successfully");


      getSubjects();



    }catch(error){

      console.log(error);

    }


  };







  return (

    <div className="dashboard-main">



      <div className="dashboard-header">


        <h1>
          📚 Manage Subjects
        </h1>


        <p>
          Add • Edit • Delete Subjects
        </p>


      </div>







      <div className="subject-card">



        <form onSubmit={handleSubmit}>


          <input

            type="text"

            name="name"

            placeholder="Subject Name"

            value={subject.name}

            onChange={handleChange}

          />







          <textarea

            name="description"

            placeholder="Subject Description"

            value={subject.description}

            onChange={handleChange}

          />







          <button className="primary-btn">

            {

              editId

              ?

              "Update Subject"

              :

              "Add Subject"

            }


          </button>



        </form>



      </div>









      <div className="subject-grid">



        {


          subjects.map((item)=>(


            <div

              className="subject-card"

              key={item._id}

            >



              <h2>
                📘
              </h2>



              <h3>
                {item.name}
              </h3>



              <p>
                {item.description}
              </p>






              <button

                className="primary-btn"

                onClick={()=>editSubject(item)}

              >

                ✏️ Edit

              </button>







              <button

                className="primary-btn"

                onClick={()=>deleteSubject(item._id)}

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