import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <header className="home-navbar">
        <div className="home-logo">
          Dream<span>Aspirant</span>
        </div>

        <div className="home-links">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/login")}>Login</button>
          <button className="signup-btn" onClick={() => navigate("/signup")}>
            Get Started
          </button>
        </div>
      </header>

      <section className="home-hero">
        <div className="hero-text">
          <div className="hero-badge">India's Smart Government Exam Platform</div>

          <h1>
            Prepare for
            <br />
            Your <span>Dream Government Job</span>
          </h1>

          <p>
            Access premium study material, previous year papers, mock tests,
            AI interview practice, and personalised exam preparation — all in
            one platform.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => navigate("/signup")}>
              Start Learning
            </button>

            <button className="secondary-btn" onClick={() => navigate("/login")}>
              Student Login
            </button>
          </div>

          <div className="stats">
            <div>
              <h2>50+</h2>
              <p>Exams</p>
            </div>

            <div>
              <h2>1000+</h2>
              <p>Questions</p>
            </div>

            <div>
              <h2>24/7</h2>
              <p>Learning</p>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <h3>Popular Exams</h3>

          <div className="exam-item">UPSC IAS / IPS</div>
          <div className="exam-item">BPSC TRE</div>
          <div className="exam-item">Bihar Police</div>
          <div className="exam-item">SSC CGL</div>
          <div className="exam-item">CTET</div>
        </div>
      </section>

      <section className="feature-section">
        <h2>Everything You Need To Succeed</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Study Material</h3>
            <p>Comprehensive notes and premium books for every exam.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Previous Year Papers</h3>
            <p>Practice with real exam questions and detailed solutions.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Interview</h3>
            <p>Improve confidence with intelligent interview practice.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Mock Tests</h3>
            <p>Track your progress and improve your performance.</p>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <h3>Dream Aspirant</h3>
        <p>Dream. Prepare. Achieve.</p>
      </footer>
    </div>
  );
}