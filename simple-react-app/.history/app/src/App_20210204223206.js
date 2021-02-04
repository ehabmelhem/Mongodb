import "./App.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {}, []);
  return (
    <div className="app">
      <form>
        <input type="text" placeholder="insert cat name" />
        <br />
        <input type="number" />
        <br />
        <input type="text" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
