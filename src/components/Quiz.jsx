import React, { useState } from 'react'
import qution from './Data'
import Qutionlist from './Qutionlist'
const Quiz = () => {
    const [currentqution,setCurrentqution]=useState(0)
    const[currentanswer,setCurrentAnswer]=useState(null)
    const[score,setScore]=useState(0)
    
    const handlOption=(option)=>{
        setCurrentAnswer(option)
        if(option===qution[currentqution].answer){
            setScore(score+1)
        }

    }
    const handlNextQution=()=>{
        setCurrentqution(currentqution+1)
        setCurrentAnswer(null)
    }
  
  return (
    <div>
        {currentqution< qution.length ?<div>

            <Qutionlist qution={qution[currentqution].qution} 
      options={qution[currentqution].options  }
      answer={qution[currentqution].answer}
      handlOption={handlOption}
      currentanswer={currentanswer}
       handlNextQution={handlNextQution}
      />



        </div>: <div className='score'>
              <h1>Your Score</h1>
             <p><b>{score}</b></p> 
            </div>}
      
     
    </div>
  )
}

export default Quiz
