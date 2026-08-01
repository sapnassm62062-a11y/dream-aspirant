import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminResults() {
  const [results, setResults] = useState([]);
  const token = localStorage.getItem("token");

  const getResults = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/admin/results",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setResults(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <div className="dashboard-main">
      <div className="dashboard-header">
        <h1>📊 Student Mock Test Results</h1>
        <p>View all students and their mock test scores</p>
      </div>

      <div className="subject-grid">
        {results.map((item) => (
          <div className="subject-card" key={item._id}>
            <h3>{item.user?.name}</h3>
            <p>📧 {item.user?.email}</p>
            <p>📱 {item.user?.phone}</p>
            <p>Exam: {item.exam}</p>
            <p>
              Score: {item.score}/{item.totalQuestions}
            </p>
            <p>
              {new Date(item.createdAt).toLocaleDateString()} {" "}
              {new Date(item.createdAt).toLocaleTimeString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}