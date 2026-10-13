import React from "react";
import "./App.css";
import Detector from "./components/Detector";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <h2>FakeNewsDetector</h2>
      </header>

      <div className="hero">
        <h1>
          Detecting Fake News with <span>Machine Learning</span>
        </h1>
        <p>AI-powered truth analysis system</p>
      </div>

      <Detector />
    </div>
  );
}

export default App;