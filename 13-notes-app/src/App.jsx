import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("")
  const [detail, setDetail] = useState("")
  const [task, setTask] = useState([])
  
  const submitHandler = (e) =>{
     e.preventDefault()
   
     const copyTask = [...task]
     copyTask.push({title, detail})
     setTask(copyTask)
     console.log(task)
     
     setTitle("") 
     setDetail("")
  }


  return (
    <div className='bg-black h-screen lg:flex text-white'>

      <form onSubmit={submitHandler} className='p-10 flex flex-col lg:w-1/2 items-start  gap-4'>
       <h1 className='font-bold text-3xl'>Add Notes</h1>
{/* Tittle input ------PART-------- */}

         <input onChange={(e)=>{setTitle(e.target.value)}} 
         className='border-2 font-medium p-5 rounded-xl w-full' 
         type="text" 
         placeholder='Enter Notes Heading' 
         value={title}
         />

{/* Descrption input ------PART-------- */}

        <textarea onChange={(e)=>{setDetail(e.target.value)}}
         className='border-2 font-medium h-42 py-2 px-5 rounded-2xl w-full'
         type="text" 
         placeholder='write details' value={detail}
        />

        <button className='bg-white text-black font-medium px-5 py-2 rounded w-full active:bg-gray-400'
        >
          + Add Note
        </button>  
      </form>

<div className='lg:w-1/2 lg:border-l-2 p-10'>
  <h1 className='font-bold text-3xl'>Your Notes</h1>
    <div className='flex flex-wrap overflow-auto h-full mt-5 gap-5'>
         <div className='bg-white h-52 w-40 rounded-2xl'></div>
         <div className='bg-white h-52 w-40 rounded-2xl'></div>
         <div className='bg-white h-52 w-40 rounded-2xl'></div>
         <div className='bg-white h-52 w-40 rounded-2xl'></div>
         <div className='bg-white h-52 w-40 rounded-2xl'></div>
         <div className='bg-white h-52 w-40 rounded-2xl'></div>
         <div className='bg-white h-52 w-40 rounded-2xl'></div>
         <div className='bg-white h-52 w-40 rounded-2xl'></div>
         <div className='bg-white h-52 w-40 rounded-2xl'></div>
         <div className='bg-white h-52 w-40 rounded-2xl'></div>
         <div className='bg-white h-52 w-40 rounded-2xl'></div>
         <div className='bg-white h-52 w-40 rounded-2xl'></div>
         <div className='bg-white h-52 w-40 rounded-2xl'></div>
         <div className='bg-white h-52 w-40 rounded-2xl'></div>
         <div className='bg-white h-52 w-40 rounded-2xl'></div>
    </div>
  </div>
</div>
  )
}

export default App
  
