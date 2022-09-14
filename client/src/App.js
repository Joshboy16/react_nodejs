import { useState } from 'react';
import './App.css';
import {Users} from "./users"
import Table from "./Table"
import axios from "axios"
import { useEffect } from 'react';



function App() {

  // const keys = ['first_name', 'last_name', 'email']

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("http://localhost:5000")
      setData(res.data)
      console.log(res.data)
    }
    fetchUsers()
  }, [])

  // const search = (data) => {
  //   return data.filter((item) => 
  //       keys.some(key => item[key].toLowerCase().includes(query))
  //   )
  // }


  return (
    <div className="App">
    
      <input type="text" placeholder="search..." className="search" onChange={e=> setQuery(e.target.value)}/>

     <Table data={data}/>
      
    </div>
  );
}

export default App;
