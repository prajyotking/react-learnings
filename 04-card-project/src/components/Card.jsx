import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div>
      <div className="card">
              <div className="top"> 
                <img src={props.brandLogo} alt="" />
                  <button>Save <Bookmark size={10} color='hsl(0deg 2.56% 75.92%)' /></button>
              </div>
      
              <div className="centre">
                <h4>{props.company} <span>{props.datePosted}</span></h4>
                <h3>{props.post}</h3>
                <div className='centreContainer'>
                  <h4>{props.tag1}</h4>
                  <h4>{props.tag2}</h4>
                </div>
              </div>
      
              <div className="bottom">
                <h4>{props.pay}</h4>
                <h4>{props.location}</h4>
                <button>Apply Now</button>
              </div>
            </div>
    </div>
  )
}

export default Card
