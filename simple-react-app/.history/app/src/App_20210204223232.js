import "./App.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {}, []);
  return (
    <div className="app">
      <form>
        <input type="text" placeholder="insert cat name" />
        <br />
        <input type="number" placeholder="insert cat age" />
        <br />
        <input type="text" placeholder="insert cat age" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
