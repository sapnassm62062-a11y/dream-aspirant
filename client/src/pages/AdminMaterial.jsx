import { useEffect, useState } from "react";
import API from "../services/api";

export default function AdminMaterial() {
  const [materials, setMaterials] = useState([]);
  const [form, setForm] = useState({
    title: "",
    type: "books",
    subject: "",
  });
  const [file, setFile] = useState(null);
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");

  const getMaterials = async () => {
    try {
      const res = await API.get("/api/admin/material");
      setMaterials(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMaterials();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
       await API.put(
  `/api/admin/material/${editId}`,
          form,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        alert("Material updated successfully");
      } else {
        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("type", form.type);
        formData.append("subject", form.subject);
        formData.append("file", file);

        await API.post(
  "/api/admin/material/upload",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        alert("Material uploaded successfully");
      }

      setForm({
        title: "",
        type: "books",
        subject: "",
      });

      setFile(null);
      setEditId(null);

      getMaterials();
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Operation failed");
    }
  };

  const editMaterial = (item) => {
    setForm({
      title: item.title,
      type: item.type,
      subject: item.subject,
    });

    setEditId(item._id);
  };

  const deleteMaterial = async (id) => {
    try {
      await API.delete(
  `/api/admin/material/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Material deleted successfully");
      getMaterials();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dashboard-main">
      <div className="dashboard-header">
        <h1>📖 Manage Study Material</h1>
        <p>Upload • Edit • Delete Books, Notes and PYQ</p>
      </div>

      <div className="subject-card">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Material title"
            value={form.title}
            onChange={handleChange}
            required
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
          >
            <option value="books">📖 Books</option>
            <option value="notes">📝 Notes</option>
            <option value="pyq">📄 PYQ</option>
          </select>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />

          {!editId && (
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          )}

          <button className="primary-btn">
            {editId ? "Update material" : "Upload PDF"}
          </button>
        </form>
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
              href={`https://dream-aspirant.onrender.com${item.fileUrl}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="primary-btn">Open PDF</button>
            </a>

            <button
              className="primary-btn"
              onClick={() => editMaterial(item)}
            >
              ✏️ Edit
            </button>

            <button
              className="primary-btn"
              onClick={() => deleteMaterial(item._id)}
            >
              🗑️ Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}