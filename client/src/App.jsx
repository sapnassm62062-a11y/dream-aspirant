import { Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import Subjects from "./pages/Subjects";
import Exams from "./pages/Exams";
import ExamDetail from "./pages/ExamDetail";

import PYQ from "./pages/PYQ";
import Books from "./pages/Books";
import MockTest from "./pages/MockTest";

import InterviewAI from "./pages/InterviewAI";
import Profile from "./pages/Profile";

import AdminDashboard from "./pages/AdminDashboard";
import AdminExam from "./pages/AdminExam";
import AdminSubject from "./pages/AdminSubject";
import AdminMaterial from "./pages/AdminMaterial";
import AdminUsers from "./pages/AdminUsers";
import AdminExamList from "./pages/AdminExam";
import AdminSubjectList from "./pages/AdminSubject";
import Material from "./pages/Material";
import MyResults from "./pages/MyResults";
import AdminResults from "./pages/AdminResults";
import Leaderboard from "./pages/Leaderboard";
import Payment from "./pages/Payment";

function App() {


  return (

    <Routes>


      {/* Login */}

      <Route 
        path="/"
        element={<Login />}
      />


      <Route 
        path="/login"
        element={<Login />}
      />



      {/* Student */}

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />


      <Route
        path="/subjects"
        element={<Subjects />}
      />


      <Route
        path="/exams"
        element={<Exams />}
      />


      <Route
        path="/exam/:examName"
        element={<ExamDetail />}
      />


      <Route
        path="/pyq"
        element={<PYQ />}
      />


      <Route
        path="/books"
        element={<Books />}
      />


      <Route
        path="/mock-test"
        element={<MockTest />}
      />


      <Route
        path="/interview"
        element={<InterviewAI />}
      />


      <Route
        path="/profile"
        element={<Profile />}
      />



      {/* Admin */}

      <Route
        path="/admin"
        element={<AdminDashboard />}
      />

     <Route
  path="/admin/exams"
  element={<AdminExam />}
/>
     <Route
 path="/admin/subjects"
 element={<AdminSubject />}
/>

   <Route
 path="/admin/material"
 element={<AdminMaterial />}
/>
     <Route
 path="/admin/users"
 element={<AdminUsers />}
/>

<Route
path="/admin/manage-exams"
element={<AdminExam />}
/>

  <Route
 path="/admin/manage-subjects"
 element={<AdminSubject />}
/>

  <Route path="/material" element={<Material />} />
   <Route path="/mock-test" element={<MockTest />} />
   <Route path="/my-results" element={<MyResults />} />
   <Route path="/admin/results" element={<AdminResults />} />
   <Route path="/leaderboard" element={<Leaderboard />} />
   <Route path="/payment" element={<Payment />} />
    </Routes>

  );

}


export default App;