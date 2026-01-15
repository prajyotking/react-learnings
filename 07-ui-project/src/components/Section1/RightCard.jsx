import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 shrink-0 relative overflow-clip rounded-4xl'>
      <img className='h-full w-full object-cover brightness-80' src={props.img} alt="" />
     <RightCardContent id={props.id}tag={props.tag}/>
     
    </div>
  )
}

export default RightCard
