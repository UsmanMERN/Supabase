import axios from "axios";
import { useEffect, useState } from "react";
function App() {

  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get("/api/jokes").then((res) => {
      setJokes(res.data)
    }).catch((e) => {
      console.error("Something went wrong" + e.message);
    })
  })

  return (
    <div className="App d-flex justify-content-center align-item-center min-vh-100">
      <h2>This is practice app</h2>
      <h5>jokes {jokes.length}</h5>
      {jokes.map((j, i) => {
        return <div key={i}>
          <h2>{j.title}</h2>
          <p>{j.content}</p>
        </div>
      })}
      <h3>tires</h3>

    </div>
  );
}

export default App;
