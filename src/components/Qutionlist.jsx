import React from 'react'

const Qutionlist = ({qution,options,answer,handlOption,currentanswer,handlNextQution}) => {
  return (
    <>
     <div className="container">
      <h1>{qution}</h1>
      <div className="option">
        <ul>
          {options.map((option,index)=>{
            return(
              <li key={index} 
              onClick={()=>handlOption(option)}
              className={currentanswer===option ? "selected":""}
              
              >{option}</li>
            )
           
          })}
        </ul>
        <button 
        disabled={currentanswer===null}
         className={currentanswer===null ? "button-disable":"button"}
         onClick={handlNextQution}

        >Next-Qution</button>
      </div>
     </div>
    </>
  )
}

export default Qutionlist
