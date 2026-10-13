import React, { useState } from "react";
import axios from "axios";

const Detector = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const checkNews = async () => {
    try {
      const res = await axios.post("http://localhost:5000/predict", {
        text: text,
      });
      setResult(res.data.prediction || res.data.result || "No result");
    } catch (err) {
      console.error(err);
      setResult("Server error ❌");
    }
  };

  return (
    <div className="detector-box">
      <textarea
        placeholder="Paste news article here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={checkNews}>Analyze News</button>

      {result && <h2 className="result">{result}</h2>}
    </div>
  );
};

export default Detector;