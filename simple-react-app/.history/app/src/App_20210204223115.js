import "./App.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {}, []);
  return (
    <div className="app">
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button></button>
      </form>
    </div>
  );
}

export default App;
