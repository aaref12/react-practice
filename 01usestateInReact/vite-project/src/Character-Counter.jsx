import React from 'react'
import { useState } from 'react'
function Character() {
   let [Character , setcharacter]=useState('')
    function Characterlenght(event){
       setcharacter(event.target.value
       )
    }
  return (
    <>
    <div>
        <input type='text' onChange={Characterlenght} value={Character}>
        </input>
        <h4>{Character} <p>{Character.length}</p></h4>
    
    </div>
    
    
    
    </>

  )
}

export default Character