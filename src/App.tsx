import { useState } from "react";
import "./App.css";

type OccasionType = "birthday" | "congratulations" | "thankyou" | "goodluck" | "custom";
type ColorType = "blue" | "pink" | "green" | "purple" | "orange";

export default function App() {
  const [name, setName] = useState("");
  const [occasion, setOccasion] = useState<OccasionType>("birthday");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState<ColorType>("blue");
  const [output, setOutput] = useState("");

  const greetingTemplates: Record<OccasionType, string> = {
    birthday: `Happy Birthday ${name}!`,
    congratulations: `Congratulations ${name}!`,
    thankyou: `Thank You ${name}!`,
    goodluck: `Good Luck ${name}!`,
    custom: message || `Hello ${name}!`
  };

  const generateGreeting = () => {
    if (!name.trim()) {
      alert("Please enter a name!");
      return;
    }

    const greeting = greetingTemplates[occasion];
    setOutput(greeting);
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <h1 className="app-title">
          Greeting Card Generator
        </h1>


        <div className="input-card">
          <div className="input-section">
            <div className="input-group">
              <label className="input-label">
                Recipient Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name..."
                className="text-input"
              />
            </div>

            <div className="input-group">
              <label className="input-label">
                Occasion
              </label>
              <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value as OccasionType)}
                className="select-input"
              >
                <option value="birthday">Birthday</option>
                <option value="congratulations">Congratulation</option>
                <option value="thankyou">Thank You</option>
                <option value="goodluck">Good Luck</option>
                <option value="custom">Custom Message</option>
              </select>
            </div>

            {occasion === "custom" && (
              <div className="input-group">
                <label className="input-label">
                  Custom Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your custom message..."
                  className="textarea-input"
                  rows={3}
                />
              </div>
            )}

            <div className="input-group">
              <label className="input-label">
                Card Color
              </label>
              <div className="color-picker">
                <button
                  onClick={() => setColor("blue")}
                  className={`color-button blue ${color === "blue" ? "active" : ""}`}
                />
                <button
                  onClick={() => setColor("pink")}
                  className={`color-button pink ${color === "pink" ? "active" : ""}`}
                />
                <button
                  onClick={() => setColor("green")}
                  className={`color-button green ${color === "green" ? "active" : ""}`}
                />
                <button
                  onClick={() => setColor("purple")}
                  className={`color-button purple ${color === "purple" ? "active" : ""}`}
                />
                <button
                  onClick={() => setColor("orange")}
                  className={`color-button orange ${color === "orange" ? "active" : ""}`}
                />
              </div>
            </div>
          </div>

          <button
            onClick={generateGreeting}
            className="generate-button"
          >
            Generate Greeting Card
          </button>
        </div>

        {output && (
          <div className={`output-card ${color}`}>
            <h2 className="greeting-text">{output}</h2>
            <p className="card-footer">
              Created with love
            </p>
          </div>
        )}
      </div>
    </div>
  );
}