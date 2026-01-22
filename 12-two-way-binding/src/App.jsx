import React, { useState } from 'react'

const App = () => {
  
  const submitHandler = (e)=>{
    e.preventDefault()          
    console.log("form Submitted by",title)

    setTitle("")
  }
  const [title, setTitle] = useState("")
  return (
    <div>
    <form onSubmit={submitHandler}>
      <input type="text" placeholder='Enter Your Name' value={title}
      onChange={(e)=>{setTitle(e.target.value);     //[[two-Way Binding]]
      }}
      />
      <button>Submit</button>
    </form> 
    </div>
  )
}

export default App
