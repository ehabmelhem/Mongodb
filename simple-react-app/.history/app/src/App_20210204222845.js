import "./App.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    console.log(fetch("/get")
  }, []);
  return (
    <div className="app">
      <h1>this is h1</h1>
    </div>
  );
}

export default App;
