import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [length, setLength] = useState(12)
  const [numberAllowed,setnumberAllowed] = useState(false)
  const [charactersAllowed,setcharactersAllowed] = useState(false)
  const [password, setPassword] = useState('')

   const PasswordGenerator=useCallback(()=>{
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed){
      str+='0123456789'
    }
    if(charactersAllowed){
      str+= '!@#$%^&*()'
    }

    for(let i=1 ;i<=length; i++){
      let char= Math.floor(Math.random()*str.length)
      pass+=str.charAt(char)
    }
    setPassword(pass)
   },[length,numberAllowed,charactersAllowed,setPassword])

  return (
   
     <>
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-gray-100'>
    </div>


     
     </>
  )
}

export default App
