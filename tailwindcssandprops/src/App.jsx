import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componants/card'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <button className='bg-purple-800 p-4 text-white rounded-4xl'>Tailwind css</button>
      


      <Card companyName='infosys' visitbtn='visite me'/>
      <Card/>

    </>
  )
}

export default App
