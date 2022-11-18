import axios from "axios";
import React,{useState,useEffect} from "react";
function App() {
  const [veri, setVeri]=useState("");
  const [id, setId]=useState(1);

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res=>setVeri(res.data[id].title))
    .catch(err=>console.log(err))
  },[veri, id])
  
  return (
    <div className="App">
     <h1> {veri} </h1> 
     <input type="text" value={id} onChange={e=>setId(e.target.value)} />
    </div>
  );
}

export default App;
