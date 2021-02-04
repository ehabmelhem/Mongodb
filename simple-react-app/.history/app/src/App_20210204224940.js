import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [url, setUrl] = useState("");
  const handelclick = (e) => {
    e.preventDefault();
    fetch("send-data", {
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        name: name,
        age: age,
        url: url,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setAge("");
      });
  };
  return (
    <div className="app">
      <form>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="insert cat name"
        />
        <br />
        <input
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
          type="number"
          placeholder="insert cat age"
        />
        <br />
        <input
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          type="text"
          placeholder="insert cat img url"
        />
        <br />
        <button
          onClick={handelclick}
          disabled={!name || !age || !url}
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
