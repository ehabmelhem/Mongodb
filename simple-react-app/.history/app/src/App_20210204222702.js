import "./App.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    fetch("/")
  }, []);
  return (
    <div className="app">
      <h1>this is h1</h1>
    </div>
  );
}

export default App;
