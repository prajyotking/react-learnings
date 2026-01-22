import React from 'react'
const App = () => {
     function onScrolling(val){
     if(val>0){
      console.log("Goinng Dowwnnnn");      
     }else{
      console.log("Comming Uppppp");
      
     }
     }
  return (
    <div onWheel={(elem)=>{
      onScrolling(elem.deltaY)
    }}>
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
    </div>
  )
}

export default App
