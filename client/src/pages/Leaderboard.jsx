import { useEffect, useState } from "react";
import axios from "axios";

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  const getLeaderboard = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/result/leaderboard"
      );
      setLeaders(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLeaderboard();
  }, []);

  return (
    <div className="dashboard-main">
      <div className="dashboard-header">
        <h1>🏆 Leaderboard</h1>
        <p>Top performers in mock tests</p>
      </div>

      <div className="subject-grid">
        {leaders.map((item, index) => (
          <div className="subject-card" key={index}>
            <h2>
              {index === 0
                ? "🥇"
                : index === 1
                ? "🥈"
                : index === 2
                ? "🥉"
                : "🏅"}
            </h2>
            <h3>#{index + 1} {item.name}</h3>
            <p>📧 {item.email}</p>
            <p>
              Best Score: {item.bestScore}/{item.totalQuestions}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}