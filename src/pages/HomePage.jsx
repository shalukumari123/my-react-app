import "./HomePage.css";
import Header from "./Header";

const HomePage = () => {
  return (<>
  <Header/>
  
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to My React App 🚀</h1>
        <p>
          This app helps you manage your daily tasks with ease. Add, edit, and
          mark your todos as completed — stay productive every day!
        </p>
        <button className="cta-btn">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>✨ Features</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>📌 Easy to Use</h3>
            <p>Simple interface to quickly add, edit, and delete tasks.</p>
          </div>
          <div className="card">
            <h3>⚡ Fast & Responsive</h3>
            <p>Optimized React app with smooth user experience.</p>
          </div>
          <div className="card">
            <h3>☁️ Saves Your Data</h3>
            <p>Todos are stored locally so you never lose them.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>📞 Contact Us</h2>
        <p>
          Have questions or feedback? Reach out anytime at{" "}
          <a href="mailto:contact@myapp.com">contact@myapp.com</a>
        </p>
      </section>
    </div>
    </>
  );
};

export default HomePage;