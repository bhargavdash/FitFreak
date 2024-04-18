// HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function HomePage() {
  return (
    <div className="home-page">
      <h2>Welcome to FitFreak!</h2>
      <p>Get started by adding your fitness challenges.</p>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
