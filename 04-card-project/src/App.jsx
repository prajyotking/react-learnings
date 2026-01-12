
import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from './components/Card'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Software Engineer", 
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$40/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://pngimg.com/uploads/meta/meta_PNG4.png",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "Frontend Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Remote (India)"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/571/large_2x/netflix-logo-on-transparent-background-free-vector.jpg",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "UI/UX Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://freepnglogo.com/images/all_img/1708533802microsoft-logo-transparent.png",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/022/424/230/original/tesla-logo-editorial-free-vector.jpg",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://logosmarcas.net/wp-content/uploads/2020/09/IBM-Simbolo.png",
    companyName: "IBM",
    datePosted: "8 weeks ago",
    post: "Junior Web Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$28/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Emblem.jpg",
    companyName: "Oracle",
    datePosted: "3 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.pngall.com/wp-content/uploads/13/Adobe-Logo-PNG-Picture.png",
    companyName: "Adobe",
    datePosted: "12 days ago",
    post: "UI Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$58/hr",
    location: "Bengaluru, India"
  }
];

  return (
    <div className='parent'>
     {jobOpenings.map(function(elem){
      
      return <Card brandLogo={elem.brandLogo} company={elem.companyName} 
                   datePosted={elem.datePosted} post={elem.post}
                   tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay}
                   location={elem.location}  />
     })}
      
    </div>
  )
}

export default App
