import React from 'react'

const RightCardContent = (props) => {
  return (
     <div className='flex flex-col justify-between h-full top-0 left-0 absolute p-6 w-full '>
        <h1 className='bg-white text-2xl font-semibold rounded-full flex justify-center items-center w-12 h-12 '>{props.id+1}</h1>

        <div>
            <p className='text-white font-semibold text-12 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa esse modi, dolores quasi molestias natus a officia delectus optio error!</p>
        </div>

        <div className='flex flex-row justify-center gap-12'>
            <button className='text-white font-semibold text-12 rounded-full w-40 bg-indigo-500 p-3'>
               {props.tag} 
            </button>
            
          <button className='text-white font-semibold text-12 bg-indigo-500 p-3 w-15 rounded-full'>  <i class="ri-arrow-right-line"></i></button>
        </div>

      </div>
  )
}

export default RightCardContent
