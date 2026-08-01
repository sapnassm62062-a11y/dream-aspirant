import { useEffect, useState } from "react";
import axios from "axios";

export default function Material() {
  const [materials, setMaterials] = useState([]);

  const getMaterials = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/admin/material"
      );
      setMaterials(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMaterials();
  }, []);

  return (
    <div className="dashboard-main">
      <div className="dashboard-header">
        <h1>📖 Study Material</h1>
        <p>Books • Notes • Previous Year Questions</p>
      </div>

      <div className="subject-grid">
        {materials.map((item) => (
          <div className="subject-card" key={item._id}>
            <h2>
              {item.type === "books"
                ? "📖"
                : item.type === "notes"
                ? "📝"
                : "📄"}
            </h2>

            <h3>{item.title}</h3>
            <p>Subject: {item.subject}</p>
            <p>Type: {item.type}</p>

            <a
              href={`http://localhost:5000${item.fileUrl}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="primary-btn">Open PDF</button>
            </a>

            <a
              href={`http://localhost:5000${item.fileUrl}`}
              download
            >
              <button className="primary-btn">Download PDF</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}