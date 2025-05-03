import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//   let [number,setnumber]=useState(0)

// function addnumber(){
//   if(number>=20){
//     alert('number is greterthan 20')
//   }
//   else{
//     setnumber(number+1)
//   }
// }
// function removenumber(){
//   if(number<=0){
//     alert('number is less than 0')
//   }else{
//     setnumber(number-1)
//   }
// }



// let [username,setusername]=useState('')
// function handlechange(event){
//   setusername(event.target.value)

// }


let [showtext,setshowtext]=useState(false)

function toggletext(){
  setshowtext(!showtext)
}
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* <div>
       <button onClick={addnumber}>add number </button>
      </div>
      <br/>
      <div>
        <h1>{number}</h1>
      </div>
      <br/>
      <div>
        <button onClick={removenumber}>remove number</button>
      </div> */}

    {/* // Controlled Input Field

    <div>

    <input type='text' value={username} onChange={handlechange}>
    
    </input>
      <h5>{username}</h5>
    </div> */}
     



     //Toggle Visibility


     <div>
      <button onClick={toggletext}>Show/Hide Tex
      {showtext && <p>Toggle me!</p>}
        </button>
    </div>





    </>
  )
}

export default App
