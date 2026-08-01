import { useParams, useNavigate } from "react-router-dom";

export default function SectionPage() {
const { section } = useParams();
const navigate = useNavigate();

const titles = {
subjects: "📚 Subjects",
exams: "🏛️ Government Exams",
pyq: "📝 Previous Year Papers",
books: "📖 Books & Study Material",
"mock-test": "📊 Mock Tests",
"ai-interview": "🤖 AI Interview Practice",
profile: "👤 Student Profile",
};

const title = titles[section] || "Dream Aspirant";

return ( <div className="dashboard-layout"> <main className="dashboard-content">
<button className="primary-btn" onClick={() => navigate("/dashboard")}>
← Back to Dashboard </button>

```
    <div className="dashboard-header" style={{ marginTop: 20 }}>
      <h1>{title}</h1>
      <p>Manage and access your {title.toLowerCase()} from one place.</p>
    </div>

    <div className="card-grid">
      <div className="card">
        <div className="card-icon">📘</div>
        <h3>{title}</h3>
        <p>This section is ready. We will connect real data from MongoDB and build upload, search, and download features.</p>
        <button className="primary-btn">Open Section</button>
      </div>

      <div className="card">
        <div className="card-icon">⭐</div>
        <h3>Premium Resources</h3>
        <p>Advanced notes, PYQs, mock tests, and AI-powered preparation tools.</p>
        <button className="primary-btn">Explore</button>
      </div>
    </div>
  </main>
</div>


);
}
