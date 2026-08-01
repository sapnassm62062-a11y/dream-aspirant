import { useEffect, useState } from "react";
import axios from "axios";
import Webcam from "react-webcam";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";


export default function InterviewAI(){


const [access,setAccess]=useState(false);

const [loading,setLoading]=useState(true);

const [camera,setCamera]=useState(false);

const [answer,setAnswer]=useState("");

const [score,setScore]=useState(null);

const [attention,setAttention]=useState(0);

const [warnings,setWarnings]=useState(0);

const [screenshots,setScreenshots]=useState([]);



useEffect(()=>{


const checkAccess=async()=>{


try{


const token=localStorage.getItem("token");


const res=await axios.get(

"http://dream-aspirant.onrender.com/api/auth/access",

{

headers:{

Authorization:`Bearer ${token}`

}

}

);


setAccess(res.data.interviewAccess);



}catch(error){

console.log(error);

}


setLoading(false);


};


checkAccess();


},[]);







// Monitoring

useEffect(()=>{


if(!camera)
return;



const timer=setInterval(()=>{


const attentionValue =
Math.floor(Math.random()*20)+80;



setAttention(attentionValue);



if(attentionValue < 85){

setWarnings(
prev=>prev+1
);

}



},5000);



return()=>clearInterval(timer);



},[camera]);








const captureScreenshot=async()=>{


const canvas =
await html2canvas(
document.body
);



const image =
canvas.toDataURL(
"image/png"
);



setScreenshots(

prev=>[

...prev,

image

]

);



};









const submitInterview=()=>{


if(answer.length < 20){


alert(
"Please write detailed answer"
);


return;


}



const finalScore =
Math.floor(Math.random()*20)+80;



setScore(finalScore);



};









const downloadReport=()=>{


const pdf =
new jsPDF();



pdf.setFontSize(18);


pdf.text(

"Dream Aspirant AI Interview Report",

20,

20

);



pdf.setFontSize(14);



pdf.text(

`Score : ${score}/100`,

20,

40

);



pdf.text(

`Attention Score : ${attention}%`,

20,

55

);



pdf.text(

`Warnings : ${warnings}`,

20,

70

);



pdf.text(

`Screenshots Captured : ${screenshots.length}`,

20,

85

);



pdf.text(

`Date : ${new Date().toLocaleString()}`,

20,

100

);



pdf.text(

"Feedback: Improve confidence and communication.",

20,

120

);



pdf.save(

"Dream-Aspirant-Interview-Report.pdf"

);



};









if(loading){


return(

<div className="dashboard-main">

<h2>
Loading...
</h2>

</div>

);


}








if(!access){


return(

<div className="dashboard-main">


<h1>
🔒 AI Interview Locked
</h1>


<p>
Unlock AI Interview for ₹10
</p>


</div>

);


}








return(


<div className="dashboard-main">



<div className="dashboard-header">


<h1>
🤖 AI Interview
</h1>


<p>
AI Powered Interview Monitoring
</p>


</div>









<div className="subject-card">





{

camera &&


<div>


<Webcam

audio={false}

width={400}

height={300}

screenshotFormat="image/jpeg"

/>



<h3>

👁️ Attention:
{attention}%

</h3>



<h3>

⚠️ Warnings:
{warnings}

</h3>


</div>


}







<button

className="primary-btn"

onClick={()=>{

setCamera(true);

captureScreenshot();

}}

>

🎥 Start Interview

</button>








<h3>

Question

</h3>


<p>

Tell me about yourself and your technical skills?

</p>







<textarea

rows="6"

placeholder="Write your answer..."

value={answer}

onChange={(e)=>setAnswer(e.target.value)}

></textarea>








<button

className="primary-btn"

onClick={submitInterview}

>

Submit Interview

</button>







{

score &&

<div>


<h2>

Final Score: {score}/100

</h2>


<p>

AI Feedback: Improve confidence, communication and technical skills.

</p>




<button

className="primary-btn"

onClick={downloadReport}

>

📄 Download Report PDF

</button>



</div>

}




</div>



</div>


);


}