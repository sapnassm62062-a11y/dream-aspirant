import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminMockTest() {
  const [questions, setQuestions] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    answer: "A",
    exam: "",
  });

  const token = localStorage.getItem("token");

  const getQuestions = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/mock");
      setQuestions(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await axios.put(
          `http://localhost:5000/api/admin/mock/${editId}`,
          form,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        alert("Question updated successfully");
      } else {
        await axios.post(
          "http://localhost:5000/api/admin/mock",
          form,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        alert("Question added successfully");
      }

      setForm({
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        answer: "A",
        exam: "",
      });

      setEditId(null);
      getQuestions();
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Operation failed");
    }
  };

  const editQuestion = (item) => {
    setForm({
      question: item.question,
      optionA: item.optionA,
      optionB: item.optionB,
      optionC: item.optionC,
      optionD: item.optionD,
      answer: item.answer,
      exam: item.exam,
    });

    setEditId(item._id);
  };

  const deleteQuestion = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/admin/mock/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Question deleted successfully");
      getQuestions();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dashboard-main">
      <div className="dashboard-header">
        <h1>📝 Manage Mock Test</h1>
        <p>Add • Edit • Delete mock test questions</p>
      </div>

      <div className="subject-card">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="exam"
            placeholder="Exam name (e.g. SSC CGL)"
            value={form.exam}
            onChange={handleChange}
            required
          />

          <textarea
            name="question"
            placeholder="Question"
            value={form.question}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="optionA"
            placeholder="Option A"
            value={form.optionA}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="optionB"
            placeholder="Option B"
            value={form.optionB}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="optionC"
            placeholder="Option C"
            value={form.optionC}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="optionD"
            placeholder="Option D"
            value={form.optionD}
            onChange={handleChange}
            required
          />

          <select
            name="answer"
            value={form.answer}
            onChange={handleChange}
          >
            <option value="A">Answer A</option>
            <option value="B">Answer B</option>
            <option value="C">Answer C</option>
            <option value="D">Answer D</option>
          </select>

          <button className="primary-btn">
            {editId ? "Update Question" : "Add Question"}
          </button>
        </form>
      </div>

      <div className="subject-grid">
        {questions.map((item) => (
          <div className="subject-card" key={item._id}>
            <h3>{item.exam}</h3>
            <p>{item.question}</p>
            <p>Answer: {item.answer}</p>

            <button
              className="primary-btn"
              onClick={() => editQuestion(item)}
            >
              ✏️ Edit
            </button>

            <button
              className="primary-btn"
              onClick={() => deleteQuestion(item._id)}
            >
              🗑️ Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}