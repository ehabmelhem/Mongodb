import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const handelclick = (e) => {};
  useEffect(() => {}, []);
  return (
    <div className="app">
      <form>
        <input type="text" placeholder="insert cat name" />
        <br />
        <input type="number" placeholder="insert cat age" />
        <br />
        <input type="text" placeholder="insert cat img url" />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
