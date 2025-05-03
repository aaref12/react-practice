import React from 'react'
import { useState } from 'react'

function AddTodo() {
  const [todo, setTodo] = useState('')
  function changeName(event){
    setTodo(event.target.value)
    
  }
  return (
    <div>
      <input type='text'></input>
      <button onClick={changeName} >change name</button>
      <h1>my name is {todo}</h1>
    </div>
  )
}

export default AddTodo