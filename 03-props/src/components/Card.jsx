import React from 'react'

const Card = (props) => {
  return (
    <div>
       <div className="card">
        {/* <img src="https://plus.unsplash.com/premium_photo-1762560038784-6d927493a029?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2NHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8" alt="" /> */}
        <img src={props.img} alt="" />
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, odit.</p>
        <button>View profile</button>
      </div> 
    </div>
  )
}

export default Card
