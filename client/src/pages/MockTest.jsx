import { useEffect, useState } from "react";
import axios from "axios";

export default function MockTest() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const token = localStorage.getItem("token");

  const getQuestions = async () => {
    try {
      const res = await axios.get("http://dream-aspirant.onrender.com/api/admin/mock");
      setQuestions(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const selectAnswer = (id, option) => {
    setAnswers({ ...answers, [id]: option });
  };

  const submitTest = async () => {
    let total = 0;

    questions.forEach((q) => {
      if (answers[q._id] === q.answer) {
        total++;
      }
    });

    setScore(total);

    try {
      await axios.post(
        "http://dream-aspirant.onrender.com/api/result/save",
        {
          exam: questions[0]?.exam || "Mock Test",
          score: total,
          totalQuestions: questions.length,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Result saved successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dashboard-main">
      <div className="dashboard-header">
        <h1>📝 Mock Test</h1>
        <p>Attempt the test and check your score</p>
      </div>

      {questions.map((q, index) => (
        <div className="subject-card" key={q._id}>
          <h3>
            Q{index + 1}. {q.question}
          </h3>

          <label>
            <input
              type="radio"
              name={q._id}
              onChange={() => selectAnswer(q._id, "A")}
            />
            {q.optionA}
          </label>

          <br />

          <label>
            <input
              type="radio"
              name={q._id}
              onChange={() => selectAnswer(q._id, "B")}
            />
            {q.optionB}
          </label>

          <br />

          <label>
            <input
              type="radio"
              name={q._id}
              onChange={() => selectAnswer(q._id, "C")}
            />
            {q.optionC}
          </label>

          <br />

          <label>
            <input
              type="radio"
              name={q._id}
              onChange={() => selectAnswer(q._id, "D")}
            />
            {q.optionD}
          </label>
        </div>
      ))}

      {questions.length > 0 && (
        <button className="primary-btn" onClick={submitTest}>
          Submit Test
        </button>
      )}

      {score !== null && (
        <div className="subject-card">
          <h2>🎉 Result</h2>
          <h3>
            Your Score: {score} / {questions.length}
          </h3>
        </div>
      )}
    </div>
  );
}