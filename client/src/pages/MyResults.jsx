import { useEffect, useState } from "react";
import axios from "axios";

export default function MyResults() {
  const [results, setResults] = useState([]);

  const token = localStorage.getItem("token");

  const getResults = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/result/my-results",
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
        <h1>📊 My Results</h1>
        <p>View all your mock test attempts and scores</p>
      </div>

      <div className="subject-grid">
        {results.length === 0 ? (
          <div className="subject-card">
            <h3>No results available</h3>
            <p>Attempt a mock test to see your score history.</p>
          </div>
        ) : (
          results.map((item) => (
            <div className="subject-card" key={item._id}>
              <h2>📊</h2>

              <h3>{item.exam}</h3>

              <p>
                Score: {item.score} / {item.totalQuestions}
              </p>

              <p>
                {new Date(item.createdAt).toLocaleDateString()} {" "}
                {new Date(item.createdAt).toLocaleTimeString()}
              </p>

              <a
                href={`http://localhost:5000/api/result/certificate/${item._id}`}
                target="_blank"
                rel="noreferrer"
              >
                <button className="primary-btn">
                  📄 Download Score Card
                </button>
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}