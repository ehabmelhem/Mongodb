import "./App.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {}, []);
  return (
    <div className="app">
      <form>
        <input type="text" placeholder="i"/>
        <br />
        <input type="text" />
        <br />
        <input type="text" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
