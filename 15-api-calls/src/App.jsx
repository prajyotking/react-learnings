import axios from 'axios';
import React from 'react'

const App = () => {
const getData = async ()=>{
 const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
 const data = await response.json()
 console.log(data);
 
//  const response1 = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
//  console.log(response1)
}

  return (
    <div>
      <h1>Api Calls</h1>
      <button onClick={getData}>Fecth</button>
    </div>
  )
}

export default App
