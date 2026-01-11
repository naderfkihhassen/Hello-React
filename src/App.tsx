import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <button onClick={() => setOutput(`Hello ${name}`)}>Greet</button>
      <h3>{output}</h3>
    </div>
  );
}
