import "./App.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    fetch("/").then(r=>r.json())
  }, []);
  return (
    <div className="app">
      <h1>this is h1</h1>
    </div>
  );
}

export default App;
