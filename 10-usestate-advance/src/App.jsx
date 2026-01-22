import React, { useState } from 'react'

const App = () => {
  // const [arr, setArr] = useState([10, 20, 30])
  const [val, setVal] = useState({user:'Sinbad', age:22})
  return (

    <div>
      <h1>{val.user}, {val.age}</h1>
      <button onClick={()=>{
        setVal(elem =>({...elem, age:40}
        ))
        // {...elem, age:50}
      }}>Click Me</button>





      {/* <button onClick={(elem)=>{
        const newArr = [...arr]
        newArr.push(40);
        setArr(newArr)
      }}>change values</button> */}
    </div>
  )
}

export default App
